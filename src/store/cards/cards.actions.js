import cardsService from '../../services/cards.service'

export const INIT_CARDS = 'INIT_CARDS'
export const INIT_CARDS_SUCCESS = 'INIT_CARDS_SUCCESS'
export const INIT_CARDS_FAILURE = 'INIT_CARDS_FAILURE'
export const DRAW_CARD = 'DRAW_CARD'
export const DRAW_CARD_SUCCESS = 'DRAW_CARD_SUCCESS'
export const DRAW_CARD_FAILURE = 'DRAW_CARD_FAILURE'

export const initCardsSuccess = ({ remaining, deckId }) => ({
  type: INIT_CARDS_SUCCESS,
  payload: {
    remaining,
    deckId
  }
})

export const initCardsFailure = (message) => ({
  type: INIT_CARDS_FAILURE,
  payload: message
})

export const initCards = () => async (dispatch) => {
  dispatch({
    type: INIT_CARDS
  })

  try {
    const data = await cardsService.generateDeck(1)
    dispatch(
      initCardsSuccess({
        remaining: data.remaining,
        deckId: data.deck_id
      })
    )
  } catch (e) {
    dispatch(initCardsFailure(e.message))
  }
}

export const drawCardSuccess = ({ card, remaining }) => ({
  type: DRAW_CARD_SUCCESS,
  payload: { card, remaining }
})

export const drawCardFailure = (message) => ({
  type: DRAW_CARD_FAILURE,
  payload: message
})

export const drawCard = () => async (dispatch, getState) => {
  const { deckId } = getState().cards

  try {
    const data = await cardsService.drawCardsFromDeck(deckId, 1)
    dispatch(drawCardSuccess({ card: data.cards[0], remaining: data.remaining }))
  } catch (e) {
    dispatch(drawCardFailure(e.message))
  }
}
