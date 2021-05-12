const authReducer = (state = "", action) => {
    switch (action.type) {
        case "GOOGLE_AUTH":
            //console.log(action?.payload);
            return action?.payload;
        default:
            return state
    }
}

export default authReducer