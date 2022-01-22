import { createSlice } from '@reduxjs/toolkit'

export const resultSlice = createSlice({
  name: 'weather',
  initialState : {
    data: [],
    location: 'Alnwick',
    unit:     'metric',
    loading: false
  },
  reducers: {
    addData: (state, action) => {
        state.data.push(action.payload);
        console.log("data has been added");
    },
    changeLocation: (state, action) => {
        state.location = action.payload
    },
    changeUnit: (state) => {
        if (state.unit === 'metric') {
          state.unit = 'imperial'
        } else if ( state.unit === 'imperial'){
          state.unit = 'metric'
        }
    },
  },
})

// Action creators are generated for each case reducer function
export const { changeLocation, changeUnit, addData, loading } = resultSlice.actions

export default resultSlice.reducer