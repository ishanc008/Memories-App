const authReducer = (state = "", action) => {
    switch (action.type) {
        case "GOOGLE_AUTH":
            //console.log(action?.payload);
            localStorage.setItem("profile", JSON.stringify({ ...action?.payload }))
            return state;
        case "AUTH":
            //console.log(JSON.stringify({ ...action?.payload }));
            localStorage.setItem("profile", JSON.stringify({ ...action?.payload }))
            return state
        case "LOGOUT":
            localStorage.clear();
            return state
        case "ERR":
            return action?.payload
        default:
            return state
    }
}

export default authReducer