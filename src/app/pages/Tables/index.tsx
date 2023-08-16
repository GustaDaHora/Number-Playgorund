import React, { useEffect, useState } from 'react';
import { Header } from 'src/app/components/Header';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  box-sizing: border-box;
  justify-content: space-between;
  background: radial-gradient(
    circle at top right,
    ${({ theme }) => theme.COLORS.BACKGROUND_700} 0%,
    ${({ theme }) => theme.COLORS.BACKGROUND_900} 70%
  );

  h1 {
    color: ${({ theme }) => theme.COLORS.WHITE};
    text-align: center;
  }

  section {
    position: relative;
    left: 50%;
    transform: translate(-50%, 0%);
    width: 30%;
    padding: 5vh;
    background-color: ${({ theme }) => theme.COLORS.WHITE};
    color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    font-weight: 800;
    border-radius: 10px;
  }

  footer {
    color: ${({ theme }) => theme.COLORS.WHITE};
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
    position: relative;
    bottom: 0px;
    text-align: center;
    width: 100%;
    padding: 3vh;
    margin-top: 0.5rem;
  }

  @media (max-width: 768px) {
    /* Styles for smaller screen sizes (e.g., smartphones) */
    section {
      width: 80%;
      padding: 3vh;
    }

    /* Adjust the font size for smaller screens */
    h1 {
      font-size: 1.5rem;
    }

    /* Adjust the font size and margin for smaller screens */
    p {
      font-size: 0.8rem;
      margin: 1vh 0;
    }

    /* Adjust the width and font size for smaller screens */
    TabuadaSelect {
      width: 80%;
      font-size: 0.8rem;
    }
  }
`;

const ResultContainer = styled.div`
  position: relative;
  left: 50%;
  transform: translate(-50%, 0);
  text-align: center;
  overflow-y: hidden;
  width: 50%;
  font-size: 1rem;
  margin-top: 0.8rem;

  @media (max-width: 768px) {
    /* Adjust the width for smaller screens */
    width: 80%;
  }
`;

export function Tables(): React.ReactElement {
  const [num, setNum] = useState<number | string>('');
  const [limit, setLimit] = useState<number | string>('50');

  const tabuada = () => {
    const n = Number(num);
    const tableLimit = Number(limit);
    let c = 1;
    const results: React.ReactNode[] = [];

    while (c <= tableLimit) {
      results.push(<p key={c}>{`${n} x ${c} = ${n * c}`}</p>);
      c++;
    }

    return results;
  };

  useEffect(() => {
    // Set the default values for num and limit when the component mounts
    setNum('');
    setLimit('10');
  }, []);

  return (
    <Container>
      <Header children={undefined}></Header>
      <h1>Tabuada</h1>
      <section>
        <p>
          Numero:{' '}
          <input
            type="number"
            id="numero"
            value={num}
            onChange={(e) => setNum(e.target.value)}
          />
        </p>
        <p>
          Limite:{' '}
          <input
            type="number"
            id="limit"
            value={limit}
            onChange={(e) => setLimit(e.target.value)}
          />
        </p>
        <ResultContainer>{tabuada()}</ResultContainer>
      </section>
      <footer>&copy;daHora</footer>
    </Container>
  );
}
