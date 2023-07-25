import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

  h1 {
    color: ${({ theme }) => theme.COLORS.WHITE};
    text-align: center;
    margin: 3vh;
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
    position: absolute;
    bottom: 0px;
    text-align: center;
    width: 100%;
    padding: 3vh;
  }
`;

const TabuadaSelect = styled.select`
  position: relative;
  left: 50%;
  transform: translate(-50%, 0);
  text-align: center;
  overflow-y: hidden;
  width: 30%;
  font-size: 1rem;
  margin-top: 0.8rem;
`;

export function Tables() {
  const [num, setNum] = useState<number | string>('');

  const tabuada = () => {
    const n = Number(num);
    let c = 1;
    const options: React.ReactNode[] = [];

    while (c <= 50) {
      options.push(
        <option key={c} value={c}>
          {`${n} x ${c} = ${n * c}`}
        </option>
      );
      c++;
    }

    useEffect(() => {
      setNum(1); // Set the default value for num when the component mounts
    }, []);

    return options;
  };

  return (
    <Container>
      <h1>Tabuada</h1>
      <section>
        <p>
          Numero:{' '}
          <input
            type="number"
            id="numero"
            value={num}
            onChange={(e) => setNum(e.target.value)}
          />{' '}
        </p>
        <div>
          <TabuadaSelect name="tabuada" id="seltab" size={10}>
            {tabuada()}
          </TabuadaSelect>
        </div>
      </section>
      <footer>&copy;daHora</footer>
    </Container>
  );
}
