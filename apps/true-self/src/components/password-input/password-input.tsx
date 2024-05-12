import styled from '@emotion/styled';
import { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa6';

const Input = styled.input`
  background: transparent;
  color: white;
  padding: 8px;
  width: 100%;
  max-width: 500px;
  border: 1px solid white;
  margin-bottom: 16px;
`;

const PasswordContainer = styled.div`
  position: relative;
  width: 100%;
`;

const Button = styled.button`
  position: absolute;
  right: 16px;
  top: 25%;
  transform: translateY(-25%);
  background: transparent;
  border: none;
  color: white;
`;

/* eslint-disable-next-line */
export interface PasswordInputProps {
  password: string;
  onChange: (password: string) => void;
}

export function PasswordInput(props: PasswordInputProps) {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  return (
    <PasswordContainer>
      <Input
        type={showPassword ? 'text' : 'password'}
        placeholder="Password"
        required
        value={props.password}
        onChange={(e) => props.onChange(e.target.value)}
      />
      <Button onClick={togglePasswordVisibility}>
        {showPassword ? <FaEyeSlash /> : <FaEye />}
      </Button>
    </PasswordContainer>
  );
}

export default PasswordInput;
