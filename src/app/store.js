import { configureStore } from "@reduxjs/toolkit";
import topicSliceReducer from "../features/topics/topicsSlice";


export default configureStore({
  reducer: {
    topics: topicSliceReducer
  },
});
