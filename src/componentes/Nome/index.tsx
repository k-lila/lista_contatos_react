import * as S from './styles'

const Nome = ({ nome }: { nome: string }) => {
  return (
    <S.Nome>
      <p>{nome}</p>
    </S.Nome>
  )
}

export default Nome
