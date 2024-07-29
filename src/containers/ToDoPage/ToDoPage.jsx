import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AddTaskForm from "../../components/AddTaskForm/AddTaskForm";
import Task from "../../components/Task/Task";
import Spinner from "../../components/UI/Spinner/Spinner";
import { createTaskApi, deleteTaskApi, getTasksFromApi } from "../../store/tasksStore/actions";
import './ToDoPage.css';

const ToDoPage = () => {
    const { tasks, loading, errorMessage, showError } = useSelector(state => state.tasks);

    const [newTask, setNewTask] = useState(
        { text: '' }
    );

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getTasksFromApi());
    }, [dispatch]);

    const taskDataChanged = (e) => {
        const { name, value } = e.target
        setNewTask(prevState => {
            return { ...prevState, [name]: value }
        });
    };

    const addNewTask = (e) => {
        e.preventDefault();
        dispatch(createTaskApi(newTask));
        setNewTask({ text: '' });
    };

    const deleteTask = (key) => {
        dispatch(deleteTaskApi(key));
    };

    return (
        <div className='todo-background todo-flex-column'>
            <div className="content-container">
                <AddTaskForm
                    taskDataChanged={(e) => taskDataChanged(e)}
                    value={newTask.text}
                    addNewTask={(e) => addNewTask(e)}
                />
                {showError ? <p className='error-text'>{errorMessage}</p> : null}
                {loading ?
                    <Spinner />
                    :
                    tasks === null || tasks === undefined ?
                        <p className='error-text'>No tasks yet</p>
                        :
                        <div className="tasks-box">
                            {Object.keys(tasks).map((key) => {
                                return <Task
                                    key={key}
                                    id={key}
                                    text={tasks[key].text}
                                    deleteIt={() => deleteTask(key)}
                                />
                            })}
                        </div>
                }
            </div>
        </div>
    );
};

export default ToDoPage;