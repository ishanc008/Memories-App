import axios from "axios"

export const getPosts = () => async (dispatch) => {
    try {
        const { data } = await axios.get("https://memories008.herokuapp.com/posts/")
        dispatch({ type: "GET_REQ", payload: data });
    } catch (error) {
        console.log(error.message);
    }
}

export const putPosts = (post) => async (dispatch) => {
    try {
        const { data } = await axios.post("https://memories008.herokuapp.com/posts/add", post)
        dispatch({ type: "POST_REQ", payload: data })
    } catch (error) {
        console.log(error.message);
    }
}
