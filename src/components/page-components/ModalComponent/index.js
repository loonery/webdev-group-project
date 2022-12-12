// add modal component to the page

import React, {useState} from 'react';


const ModalComponent = (props) => {
    const { match, id} = props;

    console.log(props)

    return (
        <div>
            <h1>Coffee Details</h1>
            <p>Product ID: {id}</p>
        </div>
    );
};

export default ModalComponent;