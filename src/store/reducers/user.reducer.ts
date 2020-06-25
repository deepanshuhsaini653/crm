import { IState, IAction } from "../state.interface"; 
import { removeAuthToken } from './../../utils/types';
import { USER_FETCH_PENDING, USER_FETCH_FULFILLED, USER_FETCH_REJECTED, USER_LOGOUT } from "../action.type";

const initaialUserState: IState<any> = {
    loading: false,
    loaded: false,
    error: false,
    data: null
};

export const userReducer = function (
    state = initaialUserState,
    action: IAction
): IState<any> {
    const { type, payload } = action;
    switch (type) {
        case USER_FETCH_PENDING: {
            return { ...state, loading: true };
        }
        case USER_FETCH_FULFILLED: {
            return {
                ...state,
                loading: false,
                loaded: true,
                data: payload.data
            };
        }
        case USER_FETCH_REJECTED: {
            return { ...state, loading: false, loaded: false, error: true };
        }
        case USER_LOGOUT: {
            removeAuthToken()
            return { ...state, loaded: false, data: null };
        }
        default:
            return state;
    }
};
