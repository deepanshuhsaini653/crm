import { axios } from "../../utils/axiosconfig";
import { USER_FETCH, USER_LOGOUT } from "../action.type";

export const GetUSer = () => ({
  type: USER_FETCH,
  payload: axios.get("/api/posts"),
});

export const LogOut = () => ({
  type: USER_LOGOUT,
});
