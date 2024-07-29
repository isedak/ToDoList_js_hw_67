import React from 'react';
import InputText from '../UI/InputText/InputText';
import PlusButton from '../UI/PlusButton/PlusButton';
import './AddTaskForm.css';

const AddTaskForm = (props) => {

    return (
        <div className="form-column">
            <p className='gray-text'>Enter text for a new task:</p>
            <form className='form-row' onSubmit={props.addNewTask}>
                <InputText
                    onInputChanged={props.taskDataChanged}
                    name='text'
                    value={props.value.length > 100 ?
                        props.value.substr(0, 100)
                        : props.value}
                />
                <PlusButton
                    disabled={props.value.trim() === '' ? true : false}
                />
            </form>
        </div>
    );
};

export default AddTaskForm;