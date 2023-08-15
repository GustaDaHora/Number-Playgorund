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

export function Check(): React.ReactElement {
  let num = document.querySelector('input#number') as HTMLInputElement;
  let lista = document.querySelector('select#lista') as HTMLSelectElement;
  let res = document.querySelector('div#result') as HTMLDivElement;
  let valores: number[] = [];

  function isNumero(n: string): boolean {
    if (Number(n) >= 1 && Number(n) <= 100) {
      return true;
    } else {
      return false;
    }
  }

  function inLista(n: string, l: number[]): boolean {
    if (l.indexOf(Number(n)) != -1) {
      return true;
    } else {
      return false;
    }
  }

  function adicionar(): void {
    if (isNumero(num.value) && !inLista(num.value, valores)) {
      valores.push(Number(num.value));
      let item = document.createElement('option');
      item.text = `Valor ${num.value} adicionado`;
      lista.appendChild(item);
      res.innerHTML = '';
    } else {
      window.alert('Valor inválido');
    }
    num.value = '';
    num.focus();
  }

  function finalizar(): void {
    if (valores.length == 0) {
      window.alert('Adicione um número');
    } else {
      let total = valores.length;
      let maior = valores[0];
      let menor = valores[0];
      let soma = 0;
      let media = 0;

      for (let pos in valores) {
        soma += valores[pos];
        if (valores[pos] > maior) maior = valores[pos];
        if (valores[pos] < menor) menor = valores[pos];
      }

      media = soma / total;

      res.innerHTML = '';
      res.innerHTML += `<p>Ao todo temos ${total} números adicionados</p>`;
      res.innerHTML += `<p>O maior número foi ${maior}</p>`;
      res.innerHTML += `<p>O menor número foi ${menor}</p>`;
      res.innerHTML += `<p>Somando os valores temos ${soma}</p>`;
      res.innerHTML += `<p>A média foi ${media.toFixed(2)}</p>`;
    }
  }

  return (
    <Container>
      <Header>
        <h1>Analisador de números</h1>
      </Header>
      <section>
        <div>
          <p>
            Numero entre 1 e 100: <input type="number" id="number" />
            <input type="button" value="ADICIONAR" onClick={adicionar} />
          </p>
          <select name="lista" id="lista"></select>
          <input type="button" value="FINALIZAR" onClick={finalizar} />
        </div>
        <div id="result"></div>
      </section>
      <footer>&copy;daHora</footer>
    </Container>
  );
}
