import { configureStore } from "@reduxjs/toolkit";
import topicSliceReducer from "../features/topics/topicsSlice";
import quizzesSliceReducer from "../features/quizzes/quizzesSlice";

export default configureStore({
  reducer: {
    topics: topicSliceReducer,
    quizzes: quizzesSliceReducer
  },
});
