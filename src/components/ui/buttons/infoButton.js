import React from 'react'
import Button from "./button";


const InfoButton = props => (
    <Button className='btn btn-info' buttonName={props.buttonName} onClick={props.onClick}/>
);

export default InfoButton;
