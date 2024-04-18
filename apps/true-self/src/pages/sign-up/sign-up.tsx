import styled from '@emotion/styled';
import HeroImage from '../../assets/images/Hero Image.png';
import Hero from '../../components/hero/hero';
import SocialLoginButtons from '../../components/social-login-buttons/social-login-buttons';

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
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <StyledSignUp>
      <Hero media={[{ type: 'image', url: HeroImage, alt: 'hero' }]}>
        <InnerContainer>
          <Header>Sign Up</Header>
          <Form onSubmit={(event) => handleSubmit(event)}>
            <Input type="email" placeholder="Email" required />
            <Input type="text" placeholder="Username" required />
            <Input type="password" placeholder="Password" required />
            <Input type="password" placeholder="Confirm Password" required />
            <SubmitButton type="submit">Sign Up</SubmitButton>
            <SocialLoginButtons
              bgColor="transparent"
              color="white"
              bgColorHover="black"
              colorHover="white"
            />
          </Form>
        </InnerContainer>
      </Hero>
    </StyledSignUp>
  );
}

export default SignUp;
