import React, { useState, useEffect } from 'react'

import Button from './Button'

export default function InputUI (){

    const [userInput, setuserInput] = useState('');


    function addToInput(charToAdd){

        //if . is already added 
        if(charToAdd === '.'){
            if(userInput.includes('.')){
                return;
            }
        }

        setuserInput(userInput + charToAdd);
    }

    function subFromInput(){
        setuserInput(userInput.slice(0, -1));
    }

    return(
        <div className='uk-container uk-text-center'>
            <p>${userInput}</p>

            <div className='uk-flex uk-flex-center uk-flex-column'>

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

                <div>
                    <Button title='+'/>
                </div>
 
            </div>
            
            
           
        </div>
    );

}