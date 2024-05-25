import { useDispatch } from 'react-redux'
import { remover, editar } from '../../store/reducers/contatos'
import * as S from './styles'
import Contato from '../../models/Contato'
import { useState } from 'react'

const ContatoCard = ({ id, nome, fone, email }: Contato) => {
  const dispatch = useDispatch()
  const contato = { id, nome, email, fone }
  const [editando, setEditando] = useState(false)
  const [nomeEditado, setnomeEditado] = useState(nome)
  const [foneEditado, setfoneEditado] = useState(fone)
  const [emailEditado, setemailEditado] = useState(email)

  const handleCancelar = () => {
    setEditando(!editando)
    setnomeEditado(contato.nome)
    setfoneEditado(contato.fone)
    setemailEditado(contato.email)
  }

  const handleSalvar = () => {
    setEditando(!editando)
    const novoContato = {
      id: id,
      nome: nomeEditado,
      fone: foneEditado,
      email: emailEditado
    }
    dispatch(editar(novoContato))
  }

  return (
    <S.ContatoCard $editando={editando}>
      <S.Header>
        <input
          id={`nome${id}`}
          type="text"
          value={nomeEditado}
          onChange={(e) => setnomeEditado(e.target.value)}
          disabled={!editando}
        />
        {editando ? (
          <S.Cancelar onClick={handleCancelar}>
            <span className="material-symbols-outlined">close</span>
          </S.Cancelar>
        ) : null}
      </S.Header>
      <S.ContatoInfo $editando={editando}>
        <div>
          <label htmlFor={`fone${id}`}>
            <span className="material-symbols-outlined">call</span>
          </label>
          <input
            id={`fone${id}`}
            type="tel"
            value={foneEditado}
            onChange={(e) => setfoneEditado(e.target.value)}
            disabled={!editando}
          />
        </div>
        <div>
          <label htmlFor={`mail${id}`}></label>
          <span className="material-symbols-outlined">mail</span>
          <input
            id={`mail${id}`}
            type="text"
            value={emailEditado}
            onChange={(e) => setemailEditado(e.target.value)}
            disabled={!editando}
          />
        </div>
      </S.ContatoInfo>
      <S.ContatoBtns $editando={editando}>
        {editando ? (
          <>
            <S.Remover onClick={() => dispatch(remover(id))}>
              <span className="material-symbols-outlined">delete</span>
            </S.Remover>
            <S.Salvar onClick={handleSalvar}>salvar</S.Salvar>
          </>
        ) : (
          <>
            <S.Editar onClick={() => setEditando(!editando)}>editar</S.Editar>
          </>
        )}
      </S.ContatoBtns>
    </S.ContatoCard>
  )
}

export default ContatoCard
