import { configureStore } from "@reduxjs/toolkit";
import reducerTasks from "./tasksStore/reducerTasks";

export const store = configureStore({
    reducer: {
        tasks: reducerTasks
    }
})