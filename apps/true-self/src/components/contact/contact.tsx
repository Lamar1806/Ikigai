import React from 'react';
import styled from 'styled-components';
import images from '../../assets/images';

const Hero = styled.div`
  position: relative;
  background-image: url(${images.fullMetal});
  background-size: cover; /* Change to contain */
  height: 80vh;
  margin-top: 100px;
  background-position: center;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
`;

const FormContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  z-index: 1; /* Ensure the form is above other elements */

  form {
    display: flex;
    flex-direction: column;
    color: white;
  }
`;

const Input = styled.input`
  padding: 10px 20px;
  margin-bottom: 20px;
  border: none;
  background-color: transparent;
  border: 1px solid white;
  border-radius: 5px;
  color: white;
  width: 300px;
  max-width: 100%;
  &::placeholder {
    color: white; /* Placeholder text color */
    font-style: italic; /* Placeholder text style */
  }
`;

const TextArea = styled.textarea`
  padding: 10px 20px;
  margin-bottom: 20px;
  border: none;
  background-color: transparent;
  border: 1px solid white;
  border-radius: 5px;
  color: white;
  width: 300px;
  max-width: 100%;
  height: 200px;
  &::placeholder {
    color: white; /* Placeholder text color */
    font-style: italic; /* Placeholder text style */
  }
`;

const SendButton = styled.button`
  color: white;
  background: transparent;
  border: 1px solid white;
  padding: 10px;

  &:hover {
    background: black;
    color: white;
    cursor: pointer;
  }
`;

const Contact = () => {
  return (
    <div>
      <Hero>
        <Overlay />
        <FormContainer>
          <form>
            <Input type="email" placeholder="Your Email" />
            <TextArea placeholder="What exchange would you propose, today?" />
            <SendButton type="submit">Send</SendButton>
          </form>
        </FormContainer>
      </Hero>
    </div>
  );
};

export default Contact;
