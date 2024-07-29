import React from "react";
import Button from "../Button/Button";
import './XButton.css';

const XButton = (props) => {
    return (
        <Button
            buttonClasses={['btn-delete']}
            click={props.deleteIt}
            label={<span className='x-span'>x</span>}
        />
    );
};

export default XButton;