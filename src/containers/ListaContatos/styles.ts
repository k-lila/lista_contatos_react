import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Main = styled.main`
  height: 100svh;
`

export const Header = styled.header`
  height: 20svh;
  display: flex;
`

export const ContainerCards = styled.div`
  padding: 0.5em 1em;
  overflow-y: auto;
  height: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
`
export const LinkAdd = styled(Link)`
  background-color: rgba(150, 200, 200);
  border-radius: 0.25em;
  font-size: 1.25em;
  font-weight: bold;
  text-decoration: none;
  text-align: center;
  padding: 0.5em;
  margin-top: 2.5em;
  height: fit-content;
  color: rgba(20, 20, 20);
  transition: all 0.3s;
  &:hover {
    background-color: rgba(150, 200, 255);
    color: black;
  }
`
