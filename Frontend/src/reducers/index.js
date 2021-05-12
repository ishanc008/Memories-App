import postsReducer from "./posts"
import currentIdReducer from "./currentId"
import authReducer from "./auth"
import { combineReducers } from "redux"

const allReducers = combineReducers({
    posts: postsReducer,
    currentId: currentIdReducer,
    auth: authReducer
})

export default allReducers