import { createSlice } from '@reduxjs/toolkit';

export const resultSlice = createSlice({
  name: 'weather',
  initialState : {
    data: [],
    search: 'Alnwick',
    unit:     'metric',
    loading: false,
    hasError: false
  },
  reducers: {
    addData: (state, action) => {
        state.data = action.payload;
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
    applyError: (state) => {
      state.hasError = true;
    },
    removeError: (state) => {
      state.hasError = false;
    }
  },
})

// Action creators are generated for each case reducer function
export const { changeSearch, changeUnitTypeToMetric, changeUnitTypeToImperial, addData, loadingData, stopLoadingData, applyError, removeError } = resultSlice.actions

export default resultSlice.reducer
