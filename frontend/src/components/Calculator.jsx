import React, {useState} from 'react';

import InputUI from './InputUI'
import Button from './Button'
import ItemList from './ItemList'

export default function Calculator(){

    //array of all items(prices added)
    const [items, setItems] = useState([]);
    //logic variable for showing input UI
    const [isInput, setIsInput] = useState(false);

    //adds new item(price) to array and updates state
    function addItem(itemToAdd){

        //checks if not empty
        if(!isNaN(itemToAdd.value)){
            //updates all items state
            setItems(setItems => [...items, itemToAdd]);
        }

        //updates showing input UI state
        setIsInput(false);
    }

    //deletes item(price) from array and updates state
    function deleteItem(itemToDeleteID){

        //copy of items
        let newItems = [...items];

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

        if(isInput){
            setIsInput(false)
            document.getElementById("addBtn").disabled = true;
        }else{
            setIsInput(true)
            document.getElementById("addBtn").disabled = false;
        }


        isInput ? setIsInput(false) : setIsInput(true)
    }

    function incrementQuantity(itemID){
         //copy of items
         let newItems = [...items];

         //delete by ID
         for(let i = 0; i < newItems.length; i++){
             let item = newItems[i];

             if(item.id === itemID){
                item.quantity = item.quantity + 1;
             }
         }

         //update state
         setItems(newItems);
    }

    function decrementQuantity(itemID){


         //copy of items
         let newItems = [...items];

         //delete by ID
         for(let i = 0; i < newItems.length; i++){
             let item = newItems[i];

             if(item.id === itemID && item.quantity > 1){
                item.quantity = item.quantity - 1;
             }
         }

         //update state
         setItems(newItems);
    }

    //finds sum without tax
    function getSum(){
        let sum = 0;

        items.forEach(item =>{
            sum += (item.value * item.quantity);
        })

        return sum.toFixed(2);
    }

    //finds sum with tax
    function getSumWithTax(){
        let sum = 0;

        items.forEach(item =>{
            sum = sum + ((item.value + (item.value * 0.13)) * item.quantity);
        })

        return sum.toFixed(2);
    }

    //finds total tax
    function getSumTax(){
        let sum = 0;

        items.forEach(item =>{
            sum = sum + (item.value * 0.13) * item.quantity;
        })

        return sum.toFixed(2);
    }


    return(
        isInput ?
        <div className='calculator'>
            <InputUI addItem={addItem}/>
            <p>Welcome to Calculator</p>
            <ItemList items={items} deleteItem={deleteItem} incrementQuantity={incrementQuantity} decrementQuantity={decrementQuantity}/>

            <Button id='addBtn' title='+' doOnClick={UILogic}/>
            <p id='signature'>by Egor Ivanov</p>
        </div>
        :
        <div className='calculator'>
            <p>Welcome to Calculator</p>

            <p>Quantity | Price | Tax | Total</p>
            <ItemList items={items} deleteItem={deleteItem} incrementQuantity={incrementQuantity} decrementQuantity={decrementQuantity}/>

            <p>Price | Tax | Total</p>
            <p>${getSum()} | ${getSumTax()} | ${getSumWithTax()}</p>
            <Button id='addBtn' title='+' doOnClick={UILogic}/>
            <p id='signature'>by Egor Ivanov</p>
        </div>

    );
}