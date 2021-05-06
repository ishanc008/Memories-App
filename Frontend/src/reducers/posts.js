const postsReducer = (state = [], action) => {
    switch (action.type) {
        case "GET_REQ":
            return action.payload;
        case "POST_REQ":
            return [...state, action.payload];
        default:
            return state;
    }
}

export default postsReducer;