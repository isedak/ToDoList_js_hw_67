import { apiService } from "../../api/apiServiceClass";
import { CLEAR_ERROR, SET_ERROR, SET_TASKS, START_LOADING, STOP_LOADING } from "./actionTypes";

export const setTasks = (value) => ({ type: SET_TASKS, value });
export const startLoading = () => ({ type: START_LOADING });
export const stopLoading = () => ({ type: STOP_LOADING });
export const setErrorMessage = (errorMessage, showError) => ({ type: SET_ERROR, errorMessage, showError });
export const clearError = () => ({ type: CLEAR_ERROR });

export const getTasksFromApi = () => {
    return async (dispatch) => {
        dispatch(startLoading());
        dispatch(clearError());
        try {
            const response = await apiService.getTasks();
            dispatch(setTasks(response));
            dispatch(stopLoading());
        } catch (error) {
            dispatch(stopLoading());
            dispatch(setErrorMessage(error.message, true));
        };
    };
};

export const createTaskApi = (value) => {
    return async (dispatch) => {
        dispatch(startLoading());
        dispatch(clearError());
        try {
            await apiService.createTask(value);
            const response = await apiService.getTasks();
            dispatch(setTasks(response));
            dispatch(stopLoading());
        } catch (error) {
            dispatch(stopLoading());
            dispatch(setErrorMessage(error.message, true));
        };
    };
};

export const updateTaskApi = (key, value) => {
    return async (dispatch) => {
        dispatch(startLoading());
        dispatch(clearError());
        try {
            await apiService.updateTask(key, value);
            const response = await apiService.getTasks();
            dispatch(setTasks(response));
            dispatch(stopLoading());
        } catch (error) {
            dispatch(stopLoading());
            dispatch(setErrorMessage(error.message, true));
        };
    };
};

export const deleteTaskApi = (key) => {
    return async (dispatch) => {
        dispatch(startLoading());
        dispatch(clearError());
        try {
            await apiService.deleteTask(key);
            const response = await apiService.getTasks();
            dispatch(setTasks(response));
            dispatch(stopLoading());
        } catch (error) {
            dispatch(stopLoading());
            dispatch(setErrorMessage(error.message, true));
        };
    };
};