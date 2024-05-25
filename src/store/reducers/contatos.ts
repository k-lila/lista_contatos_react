import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Contato from '../../models/Contato'

const initialState: Contato[] = []

const contatosSlice = createSlice({
  name: 'contatos',
  initialState,
  reducers: {
    adicionar: (state, action: PayloadAction<Contato>) => {
      state.push(action.payload)
      state.sort((a, b) => a.nome.localeCompare(b.nome))
    },
    remover: (state, action: PayloadAction<number>) => {
      return state.filter((contato) => contato.id !== action.payload)
    },
    editar: (state, action: PayloadAction<Contato>) => {
      const indexContato = state.findIndex((c) => c.id === action.payload.id)
      if (indexContato >= 0) {
        state[indexContato] = action.payload
      }
      state.sort((a, b) => a.nome.localeCompare(b.nome))
    }
  }
})

export const { adicionar, remover, editar } = contatosSlice.actions

export default contatosSlice.reducer
