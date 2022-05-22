import { createSlice } from "@reduxjs/toolkit";
import { linkQuiz } from "../topics/topicsSlice";

const quizzesSlice = createSlice({
    name: 'quizzes',
    initialState: {
        quizzes: {

        }
    },
    reducers: {
        addQuiz(state, action) {
            state.quizzes[action.payload.id] = {
                id: action.payload.id,
                name: action.payload.name,
                topicId: action.payload.topicId,
                cardIds: action.payload.cardIds
            }
        }
    }
})

export const addAndLinkQuiz = (payload) => {
    return (dispatch) => {
        dispatch(addQuiz(payload));
        dispatch(linkQuiz({topicId: payload.topicId, id: payload.id}))
    }
}

export const selectQuizzes = (state) => state.quizzes.quizzes;
export const { addQuiz } = quizzesSlice.actions;
const quizzesSliceReducer = quizzesSlice.reducer
export default quizzesSliceReducer;