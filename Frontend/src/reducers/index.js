import postsReducer from "./posts"
import currentIdReducer from "./currentId"
import { combineReducers } from "redux"

const allReducers = combineReducers({
    posts: postsReducer,
    currentId: currentIdReducer
})

export default allReducers