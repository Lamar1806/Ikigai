interface TokenManager {
  refreshToken: string;
  accessToken: string;
  expirationTime: number;
}

interface ProviderData {
  providerId: string | null;
  uid: string;
  displayName: string | null;
  email: string;
  phoneNumber: string | null;
  photoURL: string | null;
}

interface TokenResponse {
  kind: string;
  localId: string;
  email: string;
  displayName: string;
  idToken: string;
  registered: boolean;
  refreshToken: string;
  expiresIn: string;
}

interface User {
  uid: string;
  email: string;
  emailVerified: boolean;
  isAnonymous: boolean;
  providerData: ProviderData[];
  stsTokenManager: TokenManager;
  createdAt: string;
  lastLoginAt: string;
  apiKey: string;
  appName: string;
}

export interface SignInResponse {
  message: string;
  userCredential: {
    user: User;
    providerId: string | null;
    _tokenResponse: TokenResponse;
    operationType: string;
  };
}
