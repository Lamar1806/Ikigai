import styled from '@emotion/styled';
import React from 'react';

/* eslint-disable-next-line */
export interface LogoutButtonProps {}

const StyledLogoutButton = styled.div`
  color: pink;
`;

const LogoutButton: React.FC = () => {
  const handleLogout = () => {
    fetch(`${process.env.NX_SERVER_URL}/auth/logout`, {
      method: 'POST',
      credentials: 'include', // Ensure credentials are included with the fetch request
    })
      .then(() => {
        // Handle the response from the server
        window.location.href = '/';
      })
      .catch((error) => console.error('Logout failed', error));
  };

  return <button onClick={handleLogout}>Logout</button>;
};

export default LogoutButton;
