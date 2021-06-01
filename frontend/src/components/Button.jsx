import React from 'react'

export default function Button(props){


    return(

        <button id={props.id} className='btn' onClick={props.doOnClick}>{props.title}</button>
    );


}