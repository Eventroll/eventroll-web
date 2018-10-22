import React from 'react'
import Button from "./button";


const DangerButton = props => (
    <Button className='btn btn-danger' buttonName={props.buttonName} onClick={props.onClick}/>
);

export default DangerButton;

