import { FaGoogle, FaFacebookF, FaTwitter } from 'react-icons/fa';
import styled from '@emotion/styled';
import React from 'react';

interface SocialButtonProps {
  bgColor?: string;
  iconColor?: string;
  bgColorHover?: string;
  colorHover?: string;
}

const SocialLoginButtonsStyled = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px; // Spacing between buttons
  @media (max-width: 700px) {
    flex-direction: column;
  }
`;

// Styled button component using Emotion with dynamic props
const SocialButton = styled.button<SocialButtonProps>`
  display: flex;
  align-items: center;
  padding: 8px;
  margin: 5px;
  background-color: ${(props) => props.bgColor || '#fff'};
  border: 1px solid #ccc;
  cursor: pointer;
  color: ${(props) => props.iconColor || '#444'};

  &:hover {
    background-color: ${(props) => props.bgColorHover || '#444'};
    color: ${(props) => props.colorHover || '#444'};
  }

  svg {
    margin-right: 5px;
  }
`;

interface SocialLoginButtonProps {
  bgColor?: string;
  color?: string;
  bgColorHover?: string;
  colorHover?: string;
}

// Adjust the function to accept props for different button colors
export function SocialLoginButtons({
  bgColor,
  color,
  bgColorHover,
  colorHover,
}: SocialLoginButtonProps) {
  const handleGoogleLogin = () => {
    // Redirect to the backend sign-in route
    window.location.href = `${process.env.NX_SERVER_URL}/auth/google`;
  };
  return (
    <SocialLoginButtonsStyled>
      <SocialButton
        bgColor={bgColor}
        iconColor={color}
        bgColorHover={bgColorHover}
        colorHover={colorHover}
        onClick={handleGoogleLogin}
      >
        <FaGoogle />
        Login with Google
      </SocialButton>
      <SocialButton
        bgColor={bgColor}
        iconColor={color}
        bgColorHover={bgColorHover}
        colorHover={colorHover}
      >
        <FaFacebookF />
        Login with Facebook
      </SocialButton>
      <SocialButton
        bgColor={bgColor}
        iconColor={color}
        bgColorHover={bgColorHover}
        colorHover={colorHover}
      >
        <FaTwitter />
        Login with Twitter
      </SocialButton>
    </SocialLoginButtonsStyled>
  );
}

export default SocialLoginButtons;
