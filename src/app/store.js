import { configureStore } from "@reduxjs/toolkit";
import { topicsReducer } from "../features/topics/topicsSlice";
import { quizzesReducer } from "../features/quizzes/quizzesSlice";
import { cardsReducer } from "../features/cards/cardsSlice";

const store = configureStore({
  reducer: {
    topics: topicsReducer,
    quizzes: quizzesReducer,
    cards: cardsReducer,
  },
});


store.subscribe(() => {
  const { cards, quizzes, topics } = store.getState();

  localStorage.setItem('cardsSlice', JSON.stringify(cards));
  localStorage.setItem('quizzesSlice', JSON.stringify(quizzes));
  localStorage.setItem('topicsSlice', JSON.stringify(topics));
})

export default store;