import { useSelector } from 'react-redux'
import ContatoCard from '../../componentes/ContatoCard'
import * as S from './styles'
import { RootReducer } from '../../store'

const ListaContatos = () => {
  const contatos = useSelector((state: RootReducer) => state.contatos)
  return (
    <S.Main>
      <S.ContainerCards>
        {contatos.length === 0 ? (
          <S.LinkAdd to="/adicionar">Adicione contatos!</S.LinkAdd>
        ) : (
          contatos.map((contato) => {
            return (
              <ContatoCard
                id={contato.id}
                nome={contato.nome}
                fone={contato.fone}
                email={contato.email}
                key={contato.id}
              />
            )
          })
        )}
      </S.ContainerCards>
    </S.Main>
  )
}

export default ListaContatos
