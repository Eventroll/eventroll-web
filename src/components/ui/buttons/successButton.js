import React from 'react'
import Button from "./button";


const SuccessButton = props => (
    <Button className='btn btn-success' buttonName={props.buttonName} onClick={props.onClick}/>
);

export default SuccessButton;
