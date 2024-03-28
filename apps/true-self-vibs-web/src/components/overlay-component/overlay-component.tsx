/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';

// Define the styled overlay component
const Overlay = styled.div`
  position: fixed; /* Cover the entire screen */
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.8); /* Black background with opacity */
  backdrop-filter: blur(8px); /* Blur effect for the background content */
`;

const OverlayComponent = () => {
  return <Overlay />;
};

export default OverlayComponent;
