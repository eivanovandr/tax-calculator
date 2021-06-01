import React, {useState} from 'react';

import InputUI from './InputUI'
import Button from './Button'
import ItemList from './ItemList'

export default function Calculator(){

    //array of all items(prices added)
    const [items, setItems] = useState([])
    //logic variable for showing input UI
    const [isInput, setIsInput] = useState(false)

    //adds new item(price) to array and updates state
    function addItem(itemToAdd){

        //checks if not empty
        if(!isNaN(itemToAdd.value)){
            //updates all items state
            setItems(setItems => [...items, itemToAdd])
        }

        //updates showing input UI state
        setIsInput(false)
    }

    //deletes item(price) from array and updates state
    function deleteItem(itemToDeleteID){

        //copy of items
        let newItems = [...items]

        //delete by ID
        for(let i = 0; i < newItems.length; i++){
            let item = newItems[i];

            if(item.id === itemToDeleteID){
                newItems.splice(i, 1);
            }
        }

        //update state
        setItems(newItems);

    }

    //updates showing input UI state according to button
    function UILogic(){
        isInput ? setIsInput(false) : setIsInput(true)
    }

    //finds sum without tax
    function getSum(){
        let sum = 0;

        items.forEach(item =>{
            sum += item.value;
        })

        return sum.toFixed(2);
    }

    //finds sum with tax
    function getSumWithTax(){
        let sum = 0;

        items.forEach(item =>{
            sum = sum + item.value + (item.value * 0.13);
        })

        return sum.toFixed(2);
    }

    //finds total tax
    function getSumTax(){
        let sum = 0;

        items.forEach(item =>{
            sum =+ (item.value * 0.13);
        })

        return sum.toFixed(2);
    }


    return(
        isInput ?
        <div className='calculator'>
            <InputUI addItem={addItem}/>
            <p>Welcome to Calculator</p>
            <ItemList items={items} deleteItem={deleteItem}/>

            <Button doOnClick={UILogic}/>
        </div>
        :
        <div className='calculator'>
            <p>Welcome to Calculator</p>
            <ItemList items={items} deleteItem={deleteItem}/>

            <p>{getSum()} | {getSumTax()} | { getSumWithTax()}</p>
            <Button doOnClick={UILogic}/>
        </div>

    );
}