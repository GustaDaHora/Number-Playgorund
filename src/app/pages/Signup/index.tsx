import React from 'react';
import styled from 'styled-components';

import Button from 'src/app/components/Button';
import Input from 'src/app/components/Input';

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
  width: 30%;
  border: 8px solid ${({ theme }) => theme.COLORS.BACKGROUND_700};
  padding: 20px;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const SignUpPage: React.FC = () => {
  return (
    <Container>
      <Title>Sign Up</Title>
      <SignUpForm>
        <Input type="text" placeholder="Full Name" />
        <Input type="password" placeholder="Password" />
        <Button>Sign Up</Button>
      </SignUpForm>
    </Container>
  );
};

export default SignUpPage;
