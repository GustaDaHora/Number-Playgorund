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
  background: radial-gradient(
    circle at top right,
    ${({ theme }) => theme.COLORS.BACKGROUND_700} 0%,
    ${({ theme }) => theme.COLORS.BACKGROUND_900} 70%
  );
  main {
    display: flex;
    > section {
      text-align: center;
      padding: 20px;
      display: flex;
      flex-direction: column;
      gap: 1rem;
      width: 75%;
    }
    > aside {
      width: 25%;
      text-align: center;
      padding: 20px;
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }
  }
  .headerButton {
    display: none;
  }
  @media (max-width: 768px) {
    .headerButton {
      display: block;
    }
    main {
      > section {
        width: 100%;
        padding: 10px;
      }
      > aside {
        width: 70%;
        padding: 10px;
      }
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
        <Button className="headerButton" onClick={toggleAside}>
          <AiOutlineMenu />
        </Button>
      </Header>
      <main>
        <section>
          <LinkButton to="/">Em Breve</LinkButton>
          <LinkButton to="/">Em Breve</LinkButton>
          <LinkButton to="/">Em Breve</LinkButton>
          <LinkButton to="/">Em Breve</LinkButton>
        </section>
        {isSideMenuVisible && (
          <aside>
            <LinkButton to="/">Escrever</LinkButton>
            <LinkButton style={{ fontSize: '1.66rem' }} to="/">
              Minhas Cronicas
            </LinkButton>
          </aside>
        )}
      </main>
    </Container>
  );
}
