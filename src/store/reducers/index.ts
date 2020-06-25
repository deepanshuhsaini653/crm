import { combineReducers } from "redux"; 
import { userReducer } from "./user.reducer";

export const Reducers = combineReducers({
     user: userReducer
});
