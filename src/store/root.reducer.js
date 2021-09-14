import { combineReducers } from 'redux'
import cardsReducer from './cards/cards.reducer'
import userReducer from './user/user.reducer'

const rootReducer = combineReducers({
  user: userReducer,
  cards: cardsReducer
})

export default rootReducer
