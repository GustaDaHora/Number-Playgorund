import React from 'react';
import styled from 'styled-components';

// Styled-components styles
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 20px;
`;

const SignUpForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
  border: 1px solid #ccc;
  padding: 20px;
  border-radius: 5px;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Button = styled.button`
  padding: 10px 20px;
  font-size: 1.2rem;
  margin-top: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  background-color: #007bff;
  color: #fff;

  &:hover {
    background-color: #0056b3;
  }
`;

const SignUpPage: React.FC = () => {
  return (
    <Container>
      <Title>Sign Up</Title>
      <SignUpForm>
        <Input type="text" placeholder="Full Name" />
        <Input type="email" placeholder="Email" />
        <Input type="password" placeholder="Password" />
        <Button>Sign Up</Button>
      </SignUpForm>
    </Container>
  );
};

export default SignUpPage;
