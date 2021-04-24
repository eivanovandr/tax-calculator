import React from 'react';
import './Calculator.css'


import InputUI from "./InputUI";
//import Item from "./Item";



class Calculator extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            items : []
        }

    }


    addNewItem (itemToAdd){

        //from string to float
        let num = parseFloat(itemToAdd)

        //add to Items
        let itemsCopy = this.state.items;
        itemsCopy.push(num);

        //update state
        this.setState({items : itemsCopy});

    }

    render() {
        return (
            <div className="Calculator">
                <InputUI addToCalculator={this.addNewItem.bind(this)}/>

            </div>
        );
    }


}

export default Calculator;