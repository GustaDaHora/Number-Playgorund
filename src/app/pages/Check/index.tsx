import React, { useState } from 'react';
import { Header } from 'src/app/components/Header';
import styled from 'styled-components';

import Button from 'src/app/components/Button';
import Input from 'src/app/components/Input';

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  font-weight: 550;
  font-size: 17px;
  background: radial-gradient(
    circle at top right,
    ${({ theme }) => theme.COLORS.BACKGROUND_700} 0%,
    ${({ theme }) => theme.COLORS.BACKGROUND_900} 70%
  );
  overflow-y: auto;

  h1 {
    text-align: center;
  }

  section {
    text-align: center;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    width: 50%;
    padding: 5vh;
    background-color: ${({ theme }) => theme.COLORS.WHITE};
    color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    font-weight: 700;
    border-radius: 10px;
    box-shadow: 4px 4px 4px #0000006b;
    margin-bottom: 2rem;
  }

  footer {
    color: ${({ theme }) => theme.COLORS.WHITE};
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    text-align: center;
    padding: 3vh;
  }

  .select {
    margin: 1rem;
    display: flex;
    flex-wrap: wrap;
    gap: 5px;
    padding: 5px;
  }

  .select label {
    display: flex;
    align-items: center;
    margin-right: 10px;
  }

  Button {
    margin-bottom: 1rem;
  }

  .result-text {
    white-space: pre-line;

    > p {
      margin: 0.3rem 0;
    }
  }
`;

export function Check(): React.ReactElement {
  const [valores, setValores] = useState<number[]>([]);
  const [resultText, setResultText] = useState<string>('');

  function toggleValue(value: number): void {
    if (valores.includes(value)) {
      setValores(valores.filter((item) => item !== value));
    } else {
      setValores([...valores, value]);
    }
    setResultText('');
  }

  function adicionar(num: number): void {
    if (num >= 1 && num <= 100 && !valores.includes(num)) {
      setValores([...valores, num]);
      setResultText('');
    } else {
      window.alert('Valor inválido');
    }
  }

  function finalizar(): void {
    if (valores.length === 0) {
      window.alert('Adicione um número');
    } else {
      const total = valores.length;
      const maior = Math.max(...valores);
      const menor = Math.min(...valores);
      const soma = valores.reduce((acc, curr) => acc + curr, 0);
      const media = soma / total;

      setResultText(
        `Ao todo temos ${total} números adicionados\n` +
          `O maior número foi ${maior}\n` +
          `O menor número foi ${menor}\n` +
          `Somando os valores temos ${soma}\n` +
          `A média foi ${media.toFixed(2)}`
      );
    }
  }

  return (
    <Container>
      <Header children={undefined} />
      <h1>Analisador de números</h1>
      <section>
        <div>
          <p>
            Numero entre 1 e 100: <Input type="number" id="number" />
            <Button
              type="button"
              onClick={() => {
                const numberInput = document.getElementById(
                  'number'
                ) as HTMLInputElement;
                const inputValue = numberInput.value;
                adicionar(Number(inputValue));
              }}
            >
              ADICIONAR
            </Button>
          </p>
          <div className="select">
            {Array.from({ length: 100 }, (_, index) => (
              <label key={index}>
                <input
                  type="checkbox"
                  checked={valores.includes(index + 1)}
                  onChange={() => toggleValue(index + 1)}
                />
                {index + 1}
              </label>
            ))}
          </div>
          <Button type="button" onClick={finalizar}>
            FINALIZAR
          </Button>
        </div>
        <div id="result" className="result-text">
          {resultText.split('\n').map((line, index) => (
            <p key={index}>{line}</p>
          ))}
        </div>
      </section>
      <footer>&copy;daHora</footer>
    </Container>
  );
}
