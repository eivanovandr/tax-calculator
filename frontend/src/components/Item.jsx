import React from 'react';


import Button from './Button'


export default function Item(props){

    //wrap up for delete with proper id
   function deleteItem(){
        props.deleteItem(props.id);
    }

    return(
        <div className='item'>
            <p>{props.value}</p>
            <Button doOnClick={deleteItem} title='x'/>
        </div>
    )
}