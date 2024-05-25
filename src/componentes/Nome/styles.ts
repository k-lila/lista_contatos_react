import styled from 'styled-components'

export const Nome = styled.li`
  cursor: pointer;
  border-bottom: 1px solid rgba(150, 150, 150);
  margin: 0.5em 0;
  padding: 3px;
  transition: all 0.3s;

  &:hover {
    border-radius: 0.25em;
    border-bottom: 1px solid transparent;
    background-color: rgba(150, 200, 255);
  }
`
