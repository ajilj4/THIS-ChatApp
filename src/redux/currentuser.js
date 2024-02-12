import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    currentuser : []
  },
  reducers: {
    
    setcurrentuser: (state, action) => {
      state.currentuser = action.payload
    }
  }
})

// Action creators are generated for each case reducer function
export const { setcurrentuser } = counterSlice.actions

export default counterSlice.reducer