import React from 'react';
import './Calculator.css'


import InputUI from "./InputUI";
import Item from "./Item";




class Calculator extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            items : []
        }

    }

    //add to Items
    addNewItem (itemToAdd){
        let itemsCopy = this.state.items;

        //item object
        let item = {
            id : Date.now(),
            value: itemToAdd
        }

        itemsCopy.push(item);

        //update state
        this.setState({items : itemsCopy});

    }

    deleteItem(idToDelete){
        let itemsCopy = this.state.items;

        //filter by idToDelete
        itemsCopy = itemsCopy.filter(function( obj ) {
            return obj.id !== idToDelete;
        });

        //update state
        this.setState({items : itemsCopy});
    }

    render() {
        return (
            <div className="Calculator">
                <InputUI addToCalculator={this.addNewItem.bind(this)}/>

                <div className="Items">
                    {
                        this.state.items.map((item) => {
                            return <Item  key={item.id} id={item.id} value={item.value} deleteItem={this.deleteItem.bind(this)}/>
                        })
                    }
                </div>
            </div>
        );
    }


}

export default Calculator;