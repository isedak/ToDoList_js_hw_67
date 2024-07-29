import { CLEAR_ERROR, SET_ERROR, SET_TASKS, START_LOADING, STOP_LOADING } from "./actionTypes";

const initialState = {
    tasks: {},
    loading: false,
    errorMessage: '',
    showError: false
};

const reducerTasks = (state = initialState, action) => {
    switch (action.type) {
        case SET_TASKS:
            return {
                ...state,
                tasks: action.value
            }
        case START_LOADING:
            return {
                ...state,
                loading: true
            }
        case STOP_LOADING:
            return {
                ...state,
                loading: false
            }
        case CLEAR_ERROR:
            return {
                ...state,
                errorMessage: '',
                showError: false
            }
        case SET_ERROR:
            return {
                ...state,
                errorMessage: action.errorMessage,
                showError: action.showError
            }
        default:
            return state;
    }
};

export default reducerTasks;