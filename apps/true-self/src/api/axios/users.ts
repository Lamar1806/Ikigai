import { SignInResponse } from '@ikigai/shared-interfaces';
import axios from './axios';
import { TrueSelfUser } from '@ikigai/interfaces';
import { AxiosResponse } from 'axios';

// Define a user interface, adjust according to actual user data structure
interface UserData {
  displayName: string;
  age?: number;
  // Add more fields as per the user data you expect
}

interface UserResponse {
  id: string;
  email: string;
  name: string;
  // Include other user properties that are returned from your API
}

// CreateUser function
export async function createUser(
  email: string,
  password: string,
  userData: UserData
): Promise<UserResponse> {
  try {
    const response = await axios.post<UserResponse>('/users/register', {
      email,
      password,
      userData,
    });
    console.log('User created:', response.data);
    return response.data;
  } catch (error: any) {
    // Using `any` for error type; adjust as needed based on your error handling
    console.error('Error creating user:', error.response.data);
    throw error;
  }
}

// GetUser function
export async function getUser(userId: string): Promise<UserResponse> {
  try {
    const response = await axios.get<UserResponse>(`/users/${userId}`);
    console.log('User data:', response.data);
    return response.data;
  } catch (error: any) {
    console.error('Error getting user data:', error.response.data);
    throw error;
  }
}

// UpdateUser function
export async function updateUser(
  userId: string,
  updatedUserData: UserData
): Promise<UserResponse> {
  try {
    const response = await axios.put<UserResponse>(
      `/users/${userId}`,
      updatedUserData
    );
    console.log('User successfully updated:', response.data);
    return response.data;
  } catch (error: any) {
    console.error('Error updating user:', error.response.data);
    throw error;
  }
}

// DeleteUser function
export async function deleteUser(userId: string): Promise<void> {
  try {
    const response = await axios.delete(`/users/${userId}`);
    console.log('User successfully deleted:', response.data);
    return response.data;
  } catch (error: any) {
    console.error('Error deleting user:', error.response.data);
    throw error;
  }
}

// LoginUser function
export async function loginUser(
  email: string,
  password: string
): Promise<SignInResponse> {
  // Define a specific type instead of any if possible
  try {
    const response = await axios.post('/users/login', {
      email,
      password,
    });
    console.log('User logged in:', response.data);
    return response.data; // This may include a token for session management
  } catch (error: any) {
    console.error('Error logging in user:', error.response);
    throw error;
  }
}

// Axios request to logout
export const logout = async (): Promise<void> => {
  try {
    await axios.get('/logout');
  } catch (error) {
    console.error('Error logging out:', error);
    throw error;
  }
};

interface User {
  uid: string;
  email: string;
  emailVerified: boolean;
  displayName: string | null;
  phoneNumber: string | null;
  photoURL: string | null;
}

interface AuthResponse {
  isAuthenticated: boolean;
  user?: User;
}

// Axios request to check if the user is authenticated
export const checkAuthSession = async (): Promise<AuthResponse> => {
  try {
    const response: AxiosResponse<AuthResponse> = await axios.get(
      '/auth/session'
    );
    return response.data;
  } catch (error) {
    console.error('Error checking authentication session:', error);
    throw error;
  }
};
