import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateTaskApi } from '../../store/tasksStore/actions';
import Button from '../UI/Button/Button';
import InputText from '../UI/InputText/InputText';
import XButton from '../UI/XButton/XButton';
import './Task.css';

const Task = (props) => {

    const [editedTask, setEditedTask] = useState(
        { text: props.text }
    );

    const dispatch = useDispatch();

    const editTaskHandler = (e) => {
        const { name, value } = e.target
        setEditedTask(prevState => {
            return { ...prevState, [name]: value }
        });
    };

    const submitEditTask = (e, key) => {
        e.preventDefault();
        dispatch(updateTaskApi(key, editedTask));
        setEditedTask({ text: '' });
    };

    return (
        <div className='task-row'>
            <form className={'task-form'} onSubmit={(e) => submitEditTask(e, props.id)}>
                <InputText
                    value={editedTask.text.length > 100 ?
                        editedTask.text.substr(0, 100)
                        : editedTask.text}
                    name='text'
                    onInputChanged={(e) => editTaskHandler(e)}
                />
                <Button
                    buttonClasses={['save-btn-edit']}
                    label={"Save"}
                    disabled={editedTask.text.trim() === '' ||
                        editedTask.text === props.text ? true : false}
                />
            </form>
            <XButton
                deleteIt={props.deleteIt}
            />
        </div >
    )
};

export default Task;