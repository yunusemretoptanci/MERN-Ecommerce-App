import { publicRequest } from "../requestMethod"
import { loginFailure, loginStart, loginSuccess,logout,registerFailure,registerStart,registerSuccess, } from "./userRedux"


export const login = async(dispatch,user)=>{
    dispatch(loginStart())
    try{
        const res= await publicRequest.post("/auth/login", user)
        dispatch(loginSuccess(res.data));
    }catch(err){
        dispatch(loginFailure())
    }
}

export const register = async (dispatch, user) => {
    dispatch(registerStart());
  
    try {
      const response = await publicRequest.post("/auth/register", user);
  
      dispatch(registerSuccess(response.data));
      dispatch(logout());
    } catch (err) {
      dispatch(registerFailure());
    }
  };