import { useEffect, useState } from 'react'
import * as S from './styles'
import { useDispatch, useSelector } from 'react-redux'
import { adicionar } from '../../store/reducers/contatos'
import { RootReducer } from '../../store'

const getNewId = (lista_id: Array<number>) => {
  let teste = 0
  while (lista_id.includes(teste)) {
    teste++
  }
  return teste
}
const AdicionarCard = () => {
  const dispatch = useDispatch()
  const lista_contatos = useSelector((state: RootReducer) => state.contatos)
  const [submit, setSubmit] = useState(false)
  const [nomeBool, setNomeBool] = useState(Boolean)
  const [telBool, setTelBool] = useState(Boolean)
  const [mailBool, setMailBool] = useState(Boolean)
  const [nome, setNome] = useState('')
  const [tel, setTel] = useState('')
  const [mail, setMail] = useState('')
  const [nomeRepetido, setNomeRepetido] = useState(Boolean)
  const [telRepetido, setTelRepetido] = useState(Boolean)
  const [mailRepetido, setMailRepetido] = useState(Boolean)

  const handleSubmit = (evento: React.FormEvent<HTMLFormElement>) => {
    evento.preventDefault()
    const lista_id = lista_contatos.map((contato) => {
      return contato.id
    })
    const novo = { id: getNewId(lista_id), nome: nome, fone: tel, email: mail }
    dispatch(adicionar(novo))
    setNome('')
    setNomeBool(false)
    setTel('')
    setTelBool(false)
    setMail('')
    setMailBool(false)
    setSubmit(nomeBool && telBool && mailBool)
  }

  useEffect(() => {
    setSubmit(nomeBool && telBool && mailBool)
    setNomeRepetido(lista_contatos.findIndex((c) => c.nome === nome) != -1)
    setTelRepetido(lista_contatos.findIndex((c) => c.fone === tel) != -1)
    setMailRepetido(lista_contatos.findIndex((c) => c.email === mail) != -1)
  }, [nomeBool, telBool, mailBool, lista_contatos, nome, tel, mail])

  return (
    <S.AdicionarCard $disable={!submit} onSubmit={(e) => handleSubmit(e)}>
      <S.Inputs>
        <S.InputInfo $disabled={!nomeBool} $repetido={nomeRepetido}>
          <label htmlFor={`nome`}>Nome:</label>
          <input
            type="text"
            id="nome"
            value={nome}
            onChange={(e) => {
              setNomeBool(e.currentTarget.validity.valid)
              setNome(e.target.value)
            }}
            required
          />
        </S.InputInfo>
        <S.InputInfo $disabled={!telBool} $repetido={telRepetido}>
          <label htmlFor="fone">Fone:</label>
          <input
            type="tel"
            id="fone"
            value={tel}
            onChange={(e) => {
              setTelBool(e.currentTarget.validity.valid)
              setTel(e.target.value)
            }}
            required
          />
        </S.InputInfo>
        <S.InputInfo $disabled={!mailBool} $repetido={mailRepetido}>
          <label htmlFor="email">E-mail:</label>
          <input
            type="email"
            id="email"
            value={mail}
            onChange={(e) => {
              setMailBool(e.currentTarget.validity.valid)
              setMail(e.target.value)
            }}
            required
          />
        </S.InputInfo>
      </S.Inputs>
      <S.AdicionarBtn type="submit" disabled={!submit}>
        Adicionar
      </S.AdicionarBtn>
    </S.AdicionarCard>
  )
}

export default AdicionarCard
