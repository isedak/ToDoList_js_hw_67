import React from "react";
import './InputText.css';

const InputText = (props) => {
    return (
        <input type="text"
            className={'input-box'}
            onChange={props.onInputChanged}
            name={props.name !== undefined ? props.name : null}
            value={props.value}
        />
    );
};

export default InputText;