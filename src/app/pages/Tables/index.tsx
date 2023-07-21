import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  margin: 2vh 0vh;
  max-width: 80vh;
`;

const AppHeader = styled.h1`
  font: bold 5vh Arial, Helvetica, sans-serif;
  color: whitesmoke;
  text-align: center;
  margin: 5vh;
`;

const AppSection = styled.section`
  position: relative;
  left: 50%;
  transform: translate(-50%, 0%);
  width: 80vh;
  padding: 5vh;
  margin: 5vh 0vh;
  color: black;
  background-color: whitesmoke;
  border-radius: 10px;
  box-shadow: 4px 4px 4px #0000006b;
`;

const TabuadaInput = styled.input`
  width: 18vh;
`;

const TabuadaButton = styled.input`
  margin: 1vh 0vh 1vh 6vh;
`;

const AppFooter = styled.footer`
  font: bold 3vh Arial, Helvetica, sans-serif;
  color: whitesmoke;
  background-color: #375066;
  position: relative;
  bottom: 0px;
  text-align: center;
  padding: 5vh;
`;

const TabuadaSelect = styled.select`
  position: relative;
  left: 50%;
  transform: translate(-50%, 0);
  text-align: center;
  overflow-y: hidden;
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

    return options;
  };

  return (
    <>
      <AppHeader>Tabuada</AppHeader>
      <AppSection>
        <Container>
          <p>
            Numero:{' '}
            <TabuadaInput
              type="number"
              id="numero"
              value={num}
              onChange={(e) => setNum(e.target.value)}
            />{' '}
            <TabuadaButton
              type="button"
              value="Gerar Tabuada"
              onClick={tabuada}
            />
          </p>
        </Container>
        <div>
          <TabuadaSelect name="tabuada" id="seltab" size={20}>
            {tabuada()}
          </TabuadaSelect>
        </div>
      </AppSection>
      <AppFooter>&copy;daHora</AppFooter>
    </>
  );
}
