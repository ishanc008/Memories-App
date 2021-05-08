const currentIdReducer = (state = "", action) => {
    switch (action.type) {
        case "POST_ID":
            return action.payload
        default:
            return state
    }
}

export default currentIdReducer