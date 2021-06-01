import React, { useState} from 'react'

import Button from './Button'

export default function InputUI (props){

    //number input line
    const [userInput, setuserInput] = useState('');

    //adds char to number
    function addToInput(charToAdd){

        //if . is already added
        if(charToAdd === '.'){
            if(userInput.includes('.')){
                return;
            }
        }

        setuserInput(userInput + charToAdd);
    }

    //deletes last char from number
    function subFromInput(){
        setuserInput(userInput.slice(0, -1));
    }

    //sends number input line to calculator
    function addNewItem(){

        //create new number object with unique id
        props.addItem({
            id : Math.floor(Math.random() * Date.now()),
            value : parseFloat(userInput)
        })
    }

    return(
        <div className='inputUI'>
            <p>${userInput}</p>

            <div>
                <Button title='1' doOnClick={addToInput.bind(this, "1")}/>
                <Button title='2' doOnClick={addToInput.bind(this, "2")}/>
                <Button title='3' doOnClick={addToInput.bind(this, "3")}/>
            </div>

            <div>
                <Button title='4' doOnClick={addToInput.bind(this, "4")}/>
                <Button title='5' doOnClick={addToInput.bind(this, "5")}/>
                <Button title='6' doOnClick={addToInput.bind(this, "6")}/>
            </div>

            <div>
                <Button title='7' doOnClick={addToInput.bind(this, "7")}/>
                <Button title='8' doOnClick={addToInput.bind(this, "8")}/>
                <Button title='9' doOnClick={addToInput.bind(this, "9")}/>
            </div>

            <div>
                <Button title='<-' doOnClick={subFromInput.bind(this)}/>
                <Button title='0' doOnClick={addToInput.bind(this, "0")}/>
                <Button title='.' doOnClick={addToInput.bind(this, ".")}/>

            </div>

            <Button title='+' doOnClick={addNewItem}/>

        </div>
    );

}