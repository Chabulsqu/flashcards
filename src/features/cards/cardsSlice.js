import { createSlice } from "@reduxjs/toolkit";


const cardsStorage = localStorage.getItem('cardsSlice');

const cardsSlice = createSlice({
  name: "cards",
  initialState: cardsStorage === null ? {} : JSON.parse(cardsStorage),
  reducers: {
    addCard: (state, { payload: { id, front, back } }) => { 
      state[id] = { id, front, back }
  }
  }
});



export const { addCard } = cardsSlice.actions;

export const cardsReducer = cardsSlice.reducer;

export const selectCards = state => state.cards;
