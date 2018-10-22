import React from 'react'
import Button from "./button";


const DefaultButton = props => (
    <Button className='btn btn-default' buttonName={props.buttonName} onClick={props.onClick}/>
);

export default DefaultButton;
