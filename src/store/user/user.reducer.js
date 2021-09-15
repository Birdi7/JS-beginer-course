import { SET_USER } from './user.actions'

const userReducer = (state = {}, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        name: action.payload.name,
        age: action.payload.age
      }
    default: {
      return state
    }
  }
}

export default userReducer
