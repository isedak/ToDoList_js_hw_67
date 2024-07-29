import { toDoInstance } from "./instances";

class ApiServiceClass {
    getTasks = async () => {
        try {
            const response = await toDoInstance.get('/tasks.json')
            return response.data
        } catch (error) {
            throw (error);
        }
    }
    createTask = async (task) => {
        try {
            await toDoInstance.post('/tasks.json', task)
        } catch (error) {
            throw (error);
        }
    }
    updateTask = async (key, task) => {
        try {
            const path = `/tasks/${key}.json`;
            await toDoInstance.put(path, task);
        } catch (error) {
            throw (error);
        }
    }
    deleteTask = async (key) => {
        try {
            await toDoInstance.delete(`/tasks/${key}.json`);
        } catch (error) {
            throw (error);
        }
    }
};

export const apiService = new ApiServiceClass();