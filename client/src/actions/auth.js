import { AUTH } from "../constants/actionTypes";
import * as api from '../api/index.js';

export const login = (formData, navigate) => async (dispatch) => {
    try {
        const { data } = await api.logIn(formData);

        dispatch({ type: AUTH, data });
        if (data.user.accountType === "Admin")
        {
            navigate("/dashboard");
        }
        else {
            navigate("/"); 
        }
        
    }
    catch (error)
    {
        console.log(error);
    }
}