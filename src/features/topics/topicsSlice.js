import { createSlice } from "@reduxjs/toolkit"

export const topicsSlice = createSlice({
    name: 'topics',
    initialState: {
        topics: {
            
        }
    },
    reducers: {
        addTopic(state, action) {
            state.topics[action.payload.id] = {
                id: action.payload.id,
                name: action.payload.name,
                icon: action.payload.icon,
                quizIds: []
            }
        } 
    }
})

const topicSliceReducer = topicsSlice.reducer;

export const selectTopics = state => state.topics.topics;
export const { addTopic } = topicsSlice.actions;
export default topicSliceReducer;