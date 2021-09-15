import { createSlice } from '@reduxjs/toolkit'

const initialState = {}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.name = action.payload.name
      state.age = action.payload.age
    }
  }
})

export const userReducer = userSlice.reducer
export const userActions = userSlice.actions
export const userStoreName = userSlice.name
