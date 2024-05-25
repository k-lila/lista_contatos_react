import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const BarraLateral = styled.aside`
  background-color: rgba(150, 200, 200);
  padding: 1em;
  display: block;
  overflow-y: auto;
  header {
    display: flex;
    justify-content: space-between;
  }
`
export const Procurar = styled.div`
  display: flex;
  margin: 1em 0;
  input {
    border: none;
    border-radius: 0.25em;
    font-size: 1em;
    width: 100%;
    padding: 0.15em 0.25em;
  }
`
export const Nomes = styled.ul`
  list-style-type: none;
  background-color: white;
  padding: 0.25em 0.5em;
  border-radius: 0.25em;
`
export const TogglePage = styled(Link)`
  text-decoration: none;
  display: flex;
  align-items: center;
`
