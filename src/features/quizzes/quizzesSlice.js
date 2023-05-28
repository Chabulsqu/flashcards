import { createSlice } from "@reduxjs/toolkit";
import { addQuizId } from "../topics/topicsSlice";


const quizzesStorage = localStorage.getItem('quizzesSlice');

const quizzesSlice = createSlice({
  name: "quizzes",
  initialState: quizzesStorage === null ? {} : JSON.parse(quizzesStorage),
  reducers: {
    addQuiz: (state, { payload: { id, name, topicId, cardIds } }) => {
      state[id] = { id: id, name, topicId, cardIds };
    },
    deleteQuiz: (state, { payload: { id }}) => {
      delete state[id];
    }
  }
});
export const quizzesReducer = quizzesSlice.reducer;
export const { addQuiz, deleteQuiz } = quizzesSlice.actions;
export const associateWithTopicThunk = ({ topicId, cardIds, name, id }) => {
  return (dispatch) => {
    dispatch(addQuiz({ topicId: topicId, cardIds: cardIds, name: name, id }));
    dispatch(addQuizId({ quizId: id, topicId }));
  };
};

export const selectQuizzes = (state) => state.quizzes;