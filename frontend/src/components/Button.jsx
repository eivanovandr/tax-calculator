import React, { useState, useEffect } from 'react'

export default function Button(props){


    return(

        <button className="uk-button uk-button-default" onClick={props.doOnClick}>{props.title}</button>
    );


}