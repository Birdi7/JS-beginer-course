import { userReducer, userStoreName } from './user/user.slice'
import cardsReducer from './cards/cards.reducer'

const rootReducer = {
  [userStoreName]: userReducer,
  cards: cardsReducer
}

export default rootReducer
