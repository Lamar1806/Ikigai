/** @jsxImportSource @emotion/react */
import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { useSpring, animated } from 'react-spring';

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalWrapper = styled(animated.div)`
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  padding: 16px;
  border-radius: 15px;
  max-width: 600px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
  line-height: 1.5;
  border: 1px solid white;
  @media (min-width: 1200px) {
    padding: 60px;
  }
`;

const H2 = styled.h2`
  font-weight: 300;
  margin-bottom: 30px;
`;
const CloseButton = styled.button`
  width: 100%;
  padding: 20px;
  border: 1px solid white;
  background: transparent;
  color: white;
  margin-top: 16px;
`;

const UnderConstructionModal = () => {
  const [showModal, setShowModal] = useState(true);

  const modalAnimation = useSpring({
    opacity: showModal ? 1 : 0,
    transform: showModal ? `scale(1)` : `scale(0.9)`,
    config: { duration: 3000 }, // Adjust for slower or faster animation
  });

  useEffect(() => {
    // Logic to show modal only once or based on certain conditions
  }, []);

  return (
    showModal && (
      <Overlay>
        <ModalWrapper style={modalAnimation}>
          <H2>🚧 Exciting News from TrueSelf! 🚧</H2>
          <p>
            Thrilled to share that TrueSelf has evolved from concept to a more
            accessible reality! 🌟 Enjoy smoother navigation with MobileView and
            look forward to new features like appointment scheduling. Heads up:
            we're enhancing the contact form and some links, so they may not
            work as expected for now, but we're on it. TrueSelf is committed to
            supporting your healing and self-discovery journey with even greater
            ease and innovation. Explore the evolving TrueSelf experience today!
          </p>
          <CloseButton onClick={() => setShowModal(false)}>Close</CloseButton>
        </ModalWrapper>
      </Overlay>
    )
  );
};

export default UnderConstructionModal;
