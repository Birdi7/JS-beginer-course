export const SET_USER = 'SET USER'

export const setUserAction = ({ name, age }) => ({
  type: SET_USER,
  payload: { name, age }
})
