import React from 'react';


import Button from './Button'


export default function Item(props){

    //wrap up for delete with proper id
   function deleteMe(){
        props.deleteItem(props.id);
    }

    function incrementMe(){
        props.incrementQuantity(props.id);
    }

    function decrementMe(){
        props.decrementQuantity(props.id);
    }

    return(
        <div className='item'>
            <div className='item'>
                <Button doOnClick={decrementMe} title='-'/>
                <p>{props.quantity}</p>
                <Button doOnClick={incrementMe} title='+'/>
            </div>

            <p>${props.value.toFixed(2)} | ${(props.value * 0.13).toFixed(2)} | ${(props.value + props.value * 0.13).toFixed(2)}</p>

            <Button doOnClick={deleteMe} title='x'/>
        </div>
    )
}