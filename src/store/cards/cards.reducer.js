import {
  DRAW_CARD,
  DRAW_CARD_FAILURE,
  DRAW_CARD_SUCCESS,
  INIT_CARDS,
  INIT_CARDS_FAILURE,
  INIT_CARDS_SUCCESS
} from './cards.actions'
import parseCardPoint from '../../utils/cards/parseCardsPoints'

const cardsInitialState = {
  loading: true,
  cards: [],
  points: 0
}

const cardsReducer = (state = cardsInitialState, action) => {
  switch (action.type) {
    case INIT_CARDS: {
      return {
        ...state,
        loading: true
      }
    }
    case INIT_CARDS_SUCCESS: {
      return {
        ...state,
        loading: false,
        remaining: action.payload.remaining,
        deckId: action.payload.deckId
      }
    }
    case INIT_CARDS_FAILURE: {
      return {
        ...state,
        loading: false,
        error: action.payload
      }
    }
    case DRAW_CARD: {
      return {
        ...state,
        loading: true
      }
    }
    case DRAW_CARD_SUCCESS: {
      return {
        ...state,
        loading: false,
        cards: state.cards.concat(action.payload.card),
        points: state.points + parseCardPoint(action.payload.card.value),
        remaining: action.payload.remaining
      }
    }
    case DRAW_CARD_FAILURE: {
      return {
        ...state,
        loading: false,
        error: action.payload
      }
    }
    default: {
      return state
    }
  }
}

export default cardsReducer
