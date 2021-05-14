import * as api from "../api/index";

export const getPosts = () => async (dispatch) => {
    try {
        const { data } = await api.fetchPosts();
        dispatch({ type: "GET_REQ", payload: data });
    } catch (error) {
        console.log(error.message);
    }
}

export const putPosts = (post) => async (dispatch) => {
    try {
        const { data } = await api.createPost(post)
        dispatch({ type: "POST_REQ", payload: data })
    } catch (error) {
        console.log(error.message);
    }
}

export const deletePost = (id) => async (dispatch) => {
    try {
        const { data } = await api.deletePost(id);
        dispatch({ type: "DELETE_REQ", payload: data })
    } catch (error) {
        console.log(error.message);
    }
}

export const likeInc = (id) => async (dispatch) => {
    try {
        const { data } = await api.likePost(id);
        dispatch({ type: "LIKE_UPD", payload: data })
    } catch (error) {
        console.log(error.message);
    }
}

export const currId = (id) => {
    return { type: "POST_ID", payload: id }
}

export const updatePost = (id, post) => async (dispatch) => {
    try {
        const { data } = await api.updatePost(id, post);
        dispatch({ type: "UPDATE_REQ", payload: data })
    } catch (error) {
        console.log(error);
    }
}