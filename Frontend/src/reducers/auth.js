const authReducer = (state = "", action) => {
    switch (action.type) {
        case "GOOGLE_AUTH":
            //console.log(action?.payload);
            localStorage.setItem("profile", JSON.stringify({ ...action?.payload }))
            return action?.payload;
        case "LOGOUT":
            localStorage.clear();
            return action.payload
        default:
            return state
    }
}

export default authReducer