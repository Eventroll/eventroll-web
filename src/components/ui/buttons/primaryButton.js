import React from 'react'
import Button from "./button";


const PrimaryButton = props => (
    <Button className='btn btn-primary' buttonName={props.buttonName} onClick={props.onClick}/>
);

export default PrimaryButton;
