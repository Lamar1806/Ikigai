import styled from '@emotion/styled';
import HeroImage from '../../assets/images/Hero Image.png';
import Hero from '../../components/hero/hero';
import SocialLoginButtons from '../../components/social-login-buttons/social-login-buttons';
import { getUser, loginUser } from '../../api/axios/users';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loginSuccess } from '../../redux/authSlice';
// import {navigate}
import { useHistory } from 'react-router-dom';
import PasswordInput from '../../components/password-input/password-input';
/* eslint-disable-next-line */
export interface LoginProps {}

const StyledLogin = styled.div`
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
const SignUpLink = styled.a`
  color: white;
  background: transparent;
  padding: 16px;
  margin-bottom: 16px;
  width: 200px;
  cursor: pointer;
  border: 1px solid white;
  text-decoration: none;
  text-align: center;
`;

export function Login(props: LoginProps) {
  const dispatch = useDispatch();
  const history = useHistory();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const userData = await loginUser(email, password);
      const uuid = userData.userCredential.user.uid;
      const user = await getUser(uuid);
      //@ts-ignore
      dispatch(loginSuccess(user));
      history.push('/');
      // Redirect or perform additional actions after successful login
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  return (
    <StyledLogin>
      <Hero media={[{ type: 'image', url: HeroImage, alt: 'hero' }]}>
        <InnerContainer>
          <Header>Login</Header>
          <Form onSubmit={(event) => handleLogin(event)}>
            <Input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <PasswordInput password={password} onChange={setPassword} />
            <SubmitButton type="submit">Login</SubmitButton>
            <SignUpLink href="/signUp">Sign Up</SignUpLink>
            {/* <SocialLoginButtons
              bgColor="transparent"
              color="white"
              bgColorHover="black"
              colorHover="white"
            /> */}
          </Form>
        </InnerContainer>
      </Hero>
    </StyledLogin>
  );
}

export default Login;
