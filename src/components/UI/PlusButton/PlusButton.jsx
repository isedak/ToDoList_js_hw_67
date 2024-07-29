import React from "react";
import Button from "../Button/Button";
import './PlusButton.css';

const PlusButton = (props) => {
    return (
        <Button
            buttonClasses={['btn-add']}
            label={<span className='plus-span'>+</span>}
            disabled={props.disabled !== undefined ? props.disabled : false}
        />
    );
};

export default PlusButton;