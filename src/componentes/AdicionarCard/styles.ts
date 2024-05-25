import styled from 'styled-components'

export const AdicionarCard = styled.form<{ $disable: boolean }>`
  display: flex;
  flex-direction: column;
  background-color: ${(props) =>
    props.$disable ? 'rgba(200, 200, 200)' : 'rgba(150, 200, 200)'};
  width: 90%;
  height: fit-content;
  margin: 1em auto;
  padding: 0.25em;
  border-radius: 0.25em;
`

export const InputInfo = styled.div<{
  $disabled?: boolean
  $repetido?: boolean
}>`
  display: grid;
  grid-template-columns: 25% auto;
  margin: 0.5em 0;
  padding: 0.2em 0.5em;
  border-radius: 0.25em;
  background-color: ${(props) =>
    props.$repetido
      ? 'rgba(255, 255, 100)'
      : props.$disabled
      ? 'rgba(200, 200, 200)'
      : 'rgba(150, 200, 200)'};
  input {
    border: none;
    border-radius: 0.25em;
    padding: 0.25em;
  }
`

export const Inputs = styled.div`
  background-color: white;
  padding: 0.1em 0.25em;
  border-radius: 0.25em;
`

export const AdicionarBtn = styled.button`
  border: 2px solid white;
  border-radius: 0.25em;
  background-color: white;
  cursor: pointer;
  transition: background-color 0.3s;
  margin: 0.5em auto;
  height: 75%;
  &:disabled {
    cursor: auto;
  }
`
