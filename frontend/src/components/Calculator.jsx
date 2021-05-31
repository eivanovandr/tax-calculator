import React, {useState} from 'react';

import InputUI from './InputUI'


export default function Calculator(){
    
    const [items, setItems] = useState([])

    function addItem(cost){
        setItems(items.push(cost));
        
    }

    return(
        <div className='uk-container'>
            <p>Welcome to Calculator</p>

            <InputUI/>

        </div>

    );
}