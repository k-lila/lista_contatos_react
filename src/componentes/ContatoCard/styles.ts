import styled, { keyframes } from 'styled-components'

export const ContatoCard = styled.div<{ $editando: boolean }>`
  background-color: ${(props) =>
    props.$editando ? 'rgba(200, 200, 200)' : 'rgba(150, 200, 200)'};
  padding: 0.5em;
  width: 100%;
  height: fit-content;
  margin: 0.5em 0;
  border-radius: 0.25em;
  transition: all 0.5s;
`
export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5em;
  height: 1.5em;
  input {
    border: none;
    border-radius: 0.25em;
    background-color: transparent;
    font-size: 1.2em;
    font-weight: bold;
    padding: 0 1%;
    &:disabled {
      color: black;
    }
  }
`
export const ContatoInfo = styled.article<{ $editando: boolean }>`
  padding: 0.25em;
  border-radius: 0.25em;
  background-color: white;
  div {
    display: flex;
    align-items: center;
    background-color: ${(props) =>
      props.$editando ? 'rgba(200, 200, 200)' : ' rgba(150, 200, 200, 0.5);'};
    transition: background-color 0.3s;
    margin: 0.25em;
    padding: 0.1em;
    border-radius: 0.25em;
    span {
      font-size: 1.25em;
      margin: 0 0.5em;
    }
    input {
      background-color: ${(props) =>
        props.$editando ? 'rgba(255, 255, 255)' : 'rgba(255, 255, 255, 0.5)'};
      transition: background-color 0.3s;
      border: none;
      border-radius: 0.25em;
      width: 100%;
      margin: 0.1em 0.25em;
      padding: 0.25em;
      &:disabled {
        color: black;
      }
    }
  }
`
export const ContatoBtns = styled.div<{ $editando: boolean }>`
  display: flex;
  justify-content: ${(props) => (props.$editando ? 'space-between' : 'end')};
  margin-top: 0.5em;
  height: 1.5em;
`
export const Editar = styled.button`
  padding: 0.1em 0.5em;
  margin-left: 0.5em;
  cursor: pointer;
  border: 1px solid white;
  border-radius: 0.25em;
  transition: all 0.3s;

  background-color: white;

  &:hover {
    background-color: rgba(150, 200, 255);
  }
`

export const Salvar = styled.button`
  padding: 0.1em 0.5em;
  margin-left: 0.5em;
  cursor: pointer;
  border: 1px solid white;
  border-radius: 0.25em;
  transition: all 0.3s;

  &:hover {
    background-color: rgba(0, 255, 0, 0.75);
  }
`

const show = keyframes`
  from {opacity: 0}
  to {opacity: 1}
`

export const Cancelar = styled.button`
  display: flex;
  align-items: center;
  cursor: pointer;
  border: 1px solid white;
  transition: all 0.3s;
  animation: ${show} 0.5s;
  border-radius: 0.25em;
  color: white;
  background-color: rgba(220, 0, 0, 0.6);
  &:hover {
    background-color: rgba(220, 0, 0);
  }
`

export const Remover = styled.button`
  display: flex;
  height: max-content;
  padding: 0.1em;
  cursor: pointer;
  transform: scale(0.8);
  animation: ${show} 0.3s;
  border: none;
  border-radius: 0.25em;
  transition: all 0.3s;
  &:hover {
    background-color: rgba(150, 150, 150, 0.75);
  }
`
