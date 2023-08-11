import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import { AiOutlineMenu } from 'react-icons/ai';
import LinkButton from 'src/app/components/Link';
import Button from 'src/app/components/Button';
import { Header } from 'src/app/components/Header';

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  box-sizing: border-box;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

  display: grid;
  grid-template-rows: auto 1fr;
  grid-template-columns: 1fr 300px;
  grid-gap: 20px;
  height: 100vh;
  margin: 0;

  > Header {
    grid-row: 1;
    grid-column: 1 / span 2;
    padding: 20px;
  }
  > section {
    text-align: center;
    grid-row: 2;
    grid-column: 1;
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  > aside {
    grid-row: 2;
    grid-column: 2;
    padding: 20px;
    display: flex;
    flex-direction: column;
  }

  #toggleButton {
    display: none;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    #toggleButton {
      display: block;
    }

    > header,
    section {
      grid-column: 1;
    }
  }
`;

export function Cronics(): React.ReactElement {
  const [isSideMenuVisible, setIsSideMenuVisible] = useState<boolean>(true);

  function toggleAside() {
    setIsSideMenuVisible((prevIsVisible) => !prevIsVisible);
  }
  useEffect(() => {
    const screenWidth = window.innerWidth;
    setIsSideMenuVisible(screenWidth > 768);

    const handleResize = () => {
      const newScreenWidth = window.innerWidth;
      setIsSideMenuVisible(newScreenWidth > 768);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <Container>
      <Header>
        <Button onClick={toggleAside}>
          <AiOutlineMenu />
        </Button>
      </Header>
      <section>
        <LinkButton to="/">Em Breve</LinkButton>
        <LinkButton to="/">Em Breve</LinkButton>
        <LinkButton to="/">Em Breve</LinkButton>
        <LinkButton to="/">Em Breve</LinkButton>
      </section>
      {isSideMenuVisible && (
        <aside>
          <LinkButton to="/">Em Breve</LinkButton>
        </aside>
      )}
    </Container>
  );
}
