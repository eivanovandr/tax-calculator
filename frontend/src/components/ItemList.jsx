import React from 'react';

import Item from './Item'

export default function ItemList(props){


    //creating all items to render
    let items = props.items.map((item) =>{
        return <Item key={item.id} id={item.id} value={item.value} deleteItem={props.deleteItem}/>
    })


    return(
        <div>
            {items}
        </div>
    )
}