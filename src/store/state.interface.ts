export interface IState<T> {
    loading: boolean;
    loaded: boolean;
    error: boolean;
    data: null | T;
}

export interface IAction {
    type: string;
    payload: any;
}
