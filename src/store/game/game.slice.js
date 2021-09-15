import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import cardsService from '../../services/cards.service'
import parseCardPoint from '../../utils/cards/parseCardsPoints'

const sliceName = 'game'

const initialState = {
  loading: true,
  cards: [],
  points: 0,
  inited: false
}

const initCards = createAsyncThunk(`${sliceName}/initCards`, async () => {
  try {
    const data = await cardsService.generateDeck(1)
    return {
      remaining: data.remaining,
      deckId: data.deck_id
    }
  } catch (e) {
    throw e.message
  }
})

const drawCards = createAsyncThunk(`${sliceName}/drawCard`, async (payload, thunk) => {
  const { deckId } = thunk.getState()[sliceName]
  try {
    const data = await cardsService.drawCardsFromDeck(deckId, 1)
    return { card: data.cards[0], remaining: data.remaining }
  } catch (e) {
    throw e.message
  }
})

const gameSlice = createSlice({
  name: sliceName,
  initialState,
  extraReducers: (builder) => {
    builder.addCase(initCards.pending, (state) => {
      state.loading = true
      state.inited = true
    })
    builder.addCase(initCards.fulfilled, (state, action) => {
      state.loading = false
      state.remaining = action.payload.remaining
      state.deckId = action.payload.deckId
    })
    builder.addCase(initCards.rejected, (state, action) => {
      state.loading = false
      state.error = action.payload
    })
    builder.addCase(drawCards.pending, (state) => {
      state.loading = true
    })
    builder.addCase(drawCards.fulfilled, (state, action) => {
      state.loading = false
      state.cards.push(action.payload.card)
      state.points += parseCardPoint(action.payload.card.value)
      state.remaining = action.payload.remaining
    })
    builder.addCase(drawCards.rejected, (state, action) => {
      state.loading = false
      state.error = action.payload
    })
  }
})

export const gameReducer = gameSlice.reducer
export const gameActions = { ...gameSlice.actions, initCards, drawCards }
export const gameStateName = gameSlice.name
