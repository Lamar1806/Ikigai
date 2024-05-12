import styled from '@emotion/styled';
import HeroImage from '../../assets/images/Hero Image.png';
import Hero from '../../components/hero/hero';
import { createUser } from '../../api/axios/users';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginSuccess } from '../../redux/authSlice';
import { useHistory } from 'react-router-dom';
import PasswordInput from '../../components/password-input/password-input';

/* eslint-disable-next-line */
export interface SignUpProps {}

const StyledSignUp = styled.div`
  background-image: url(${HeroImage});
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-position: center;
`;
const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 80%;
`;
const Header = styled.h1`
  color: white;
  text-align: center;
  margin-bottom: 16px;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Input = styled.input`
  background: transparent;
  color: white;
  padding: 8px;
  width: 100%;
  max-width: 500px;
  border: 1px solid white;
  margin-bottom: 16px;
`;
const SubmitButton = styled.button`
  color: white;
  background: transparent;
  padding: 16px;
  margin-bottom: 16px;
  width: 200px;
  cursor: pointer;
  border: 1px solid white;
`;

export function SignUp(props: SignUpProps) {
  const dispatch = useDispatch();
  const history = useHistory();
  const [email, setEmail] = useState('test@gmail.com');
  const [displayName, setDisplayName] = useState('Hello World');
  const [password, setPassword] = useState('testing');
  const [passwordConfirm, setPasswordConfirm] = useState('testing');
  const [error, setError] = useState('');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (password !== passwordConfirm) {
      setError('Passwords do not match');
      return;
    }
    if (password.length < 6) {
      setError('Password should be at least 6 characters');
      return;
    }
    try {
      const user = await createUser(email, password, {
        displayName: displayName,
      });
      //@ts-ignore
      dispatch(loginSuccess(user));
      console.log('User created:', user);
      history.push('/');
      // Redirect or clear form here upon successful sign up
    } catch (error) {
      console.error('Error creating user:', error);
      setError('Failed to create user');
    }
  };

  return (
    <StyledSignUp>
      <Hero media={[{ type: 'image', url: HeroImage, alt: 'hero' }]}>
        <InnerContainer>
          <Header>Sign Up</Header>
          <Form onSubmit={handleSubmit}>
            <Input
              type="email"
              placeholder="Email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              type="text"
              placeholder="Display Name"
              required
              value={displayName}
              onChange={(e) => setDisplayName(e.target.value)}
            />
            <PasswordInput password={password} onChange={setPassword} />
            <PasswordInput
              password={passwordConfirm}
              onChange={setPasswordConfirm}
            />
            <SubmitButton type="submit">Sign Up</SubmitButton>
            {error && (
              <div style={{ color: 'red', marginTop: '10px' }}>{error}</div>
            )}
            {/* <SocialLoginButtons
              bgColor="transparent"
              color="white"
              bgColorHover="black"
              colorHover="white"
            /> */}
          </Form>
        </InnerContainer>
      </Hero>
    </StyledSignUp>
  );
}

export default SignUp;
