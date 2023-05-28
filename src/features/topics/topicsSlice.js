import { createSlice } from "@reduxjs/toolkit";


const topicsStorage = localStorage.getItem('topicsSlice');
const topicsSlice = createSlice({
  name: "topics",
  initialState: topicsStorage === null ? {} : JSON.parse(topicsStorage),
  reducers: {
    addTopic: (state, { payload: { id, name, icon } }) => {
      state[id] = { id: id, name: name, icon: icon, quizIds: [] };
    },
    addQuizId: (state, { payload: { quizId, topicId } }) => {
      state[topicId].quizIds.push(quizId);
    },
    deleteTopic: (state, { payload: {id}}) => {
      console.log(state[id])
      delete state[id];
      console.log(state[id])
    }
  }
});

export const topicsReducer = topicsSlice.reducer;
export const { addTopic, addQuizId, deleteTopic } = topicsSlice.actions;

export const selectTopics = (state) => state.topics;