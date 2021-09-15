import { userReducer, userStoreName } from './user/user.slice'
import { gameReducer, gameStateName } from './game/game.slice'

const rootReducer = {
  [userStoreName]: userReducer,
  [gameStateName]: gameReducer
}

export default rootReducer
