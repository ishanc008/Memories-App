import * as api from "../api/index"

export const signin = (formData, history) => async (dispatch) => {
    try {
        const { data } = await api.signin(formData);
        dispatch({ type: "AUTH", payload: data })
        dispatch({ type: "ERR", payload: "" })
        history.push("/");
    } catch (error) {
        if (error) {
            console.log(error?.response?.data?.message);
            dispatch({ type: "ERR", payload: error?.response?.data?.message })
            console.log(error);
        }
    }
}

export const signup = (formData, history) => async (dispatch) => {
    try {
        const { data } = await api.signup(formData);
        dispatch({ type: "AUTH", payload: data })
        //console.log(data);
        dispatch({ type: "ERR", payload: "" })
        history.push("/");
    } catch (error) {
        if (error) {
            console.log(error.response.data.message);
            dispatch({ type: "ERR", payload: error.response.data.message })
            console.log(error);
        }
    }
}