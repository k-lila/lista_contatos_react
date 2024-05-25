import { useState } from 'react'
import { RootReducer } from '../../store'
import { useSelector } from 'react-redux'
import Nome from '../../componentes/Nome'
import * as S from './styles'

const BarraLateral = ({ adicionar }: { adicionar?: boolean }) => {
  const [procura, setProcura] = useState('')
  const contatos = useSelector((state: RootReducer) => state.contatos)
  const procuraHandler = (evento: React.ChangeEvent<HTMLInputElement>) => {
    setProcura(evento.target.value)
  }
  const listaProcura = procura
    ? contatos.filter((contato) => contato.nome == procura)
    : contatos
  return (
    <S.BarraLateral>
      <header>
        <h2>Contatos</h2>
        {adicionar ? (
          <S.TogglePage to="/">
            <span className="material-symbols-outlined">arrow_back</span>
          </S.TogglePage>
        ) : (
          <S.TogglePage to="/adicionar">
            <span className="material-symbols-outlined">add</span>
          </S.TogglePage>
        )}
      </header>
      <S.Procurar>
        <input
          id="procura"
          type="text"
          placeholder="Procurar"
          onChange={(e) => procuraHandler(e)}
        />
      </S.Procurar>
      <S.Nomes>
        {listaProcura.length === 0 ? (
          <Nome nome="Nenhum" />
        ) : (
          listaProcura.map((contato, index) => (
            <Nome nome={contato.nome} key={index} />
          ))
        )}
      </S.Nomes>
    </S.BarraLateral>
  )
}

export default BarraLateral
