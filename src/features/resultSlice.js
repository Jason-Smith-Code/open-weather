import { createSlice } from '@reduxjs/toolkit'

export const resultSlice = createSlice({
  name: 'weather',
  initialState : {
    data: [],
    search: 'Alnwick',
    unit:     'metric',
    loading: false
  },
  reducers: {
    addData: (state, action) => {
        state.data = action.payload;
        console.log("data has been updated");
    },
    changeSearch: (state, action) => {
        state.search = action.payload
    },
    changeUnitTypeToMetric: (state) => {
      state.unit = 'metric';
    },
    changeUnitTypeToImperial: (state) => {
      state.unit = 'imperial';
    },
    loadingData: (state) => {
      state.loading = true;
    },
    stopLoadingData: (state) => {
      state.loading = false;
    },
  },
})

// Action creators are generated for each case reducer function
export const { changeSearch, changeUnitTypeToMetric, changeUnitTypeToImperial, addData, loadingData, stopLoadingData } = resultSlice.actions

export default resultSlice.reducer


// THis should include
// successfullyLoaded
// loadingFailed

// remove stoploadingdata

// add some error catch