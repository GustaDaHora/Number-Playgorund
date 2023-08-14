import React, { useState } from 'react';
import { Header } from 'src/app/components/Header';
import styled from 'styled-components';

const Container = styled.div`
  margin: 0;
  padding: 0;
  font: 3vh Arial, Helvetica, sans-serif;

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

  section {
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    width: 50%;
    padding: 5vh;
    margin: 5vh 0vh;
    color: black;
    background-color: whitesmoke;
    border-radius: 10px;
    box-shadow: 4px 4px 4px #0000006b;
  }
`;

const ResultContainer = styled.div`
  margin: 4vh;
`;

export function Check(): React.ReactElement {
  const [valores, setValores] = useState<number[]>([]);
  const [firstInputValue, setFirstInputValue] = useState('');
  const [secInputValue, setSecInputValue] = useState('');
  const [resultValues, setResultValues] = useState({
    total: 0,
    maior: 0,
    menor: 0,
    soma: 0,
    media: 0,
  });

  const result = () => {
    if (valores.length === 0) {
      window.alert('Adicione números');
    } else {
      const total = valores.length;
      const maior = Math.max(...valores);
      const menor = Math.min(...valores);
      const soma = valores.reduce((acc, curr) => acc + curr, 0);
      const media = soma / total;

      setResultValues({
        total,
        maior,
        menor,
        soma,
        media,
      });
    }
  };

  return (
    <Container>
      <Header>
        <h1>Analisador de números</h1>
      </Header>
      <section>
        <div className="test">
          <p>
            Numero entre 1 e 100:{' '}
            <input
              type="number"
              value={firstInputValue}
              onChange={(e) => setFirstInputValue(e.target.value)}
            />{' '}
            <input
              type="button"
              value={secInputValue}
              onChange={(e) => setSecInputValue(e.target.value)}
            />
          </p>
          <input type="button" value="FINALIZAR" onClick={result} />
        </div>
        <ResultContainer>
          <div>
            <h2>Resultados:</h2>
            <p>Total de números: {resultValues.total}</p>
            <p>Maior número: {resultValues.maior}</p>
            <p>Menor número: {resultValues.menor}</p>
            <p>Soma de todos os números: {resultValues.soma}</p>
            <p>Média dos números: {resultValues.media}</p>
          </div>
        </ResultContainer>{' '}
      </section>
      <footer>&copy;daHora</footer>
    </Container>
  );
}
