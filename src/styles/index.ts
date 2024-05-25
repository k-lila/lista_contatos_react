import styled, { createGlobalStyle } from 'styled-components'

const EstiloGlobal = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
  }
`
export const Container = styled.div`
  display: grid;
  grid-template-columns: 200px auto;
  max-width: 600px;
  height: 100svh;
  margin: 0 auto;
`

export default EstiloGlobal
