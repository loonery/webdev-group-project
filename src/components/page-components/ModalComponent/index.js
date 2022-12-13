
import React, {useState} from 'react';
import {useLocation} from "react-router";


const ModalComponent = (props) => {

    const {state} = useLocation();
    const { id } = state;

    return (
        <div>
            <h1>Coffee Details</h1>
            <p>Product ID: </p>
        </div>
    );
};

export default ModalComponent;