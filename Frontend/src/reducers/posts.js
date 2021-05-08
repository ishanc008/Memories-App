const postsReducer = (state = [], action) => {
    switch (action.type) {
        case "GET_REQ":
            return action.payload;
        case "POST_REQ":
            return [...state, action.payload];
        case "LIKE_UPD":
            return state.map((post) => (post._id === action.payload._id ? action.payload : post))
        case "DELETE_REQ":
            return state.filter((post) => post._id !== action.payload);
        default:
            return state;
    }
}

export default postsReducer;