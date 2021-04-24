import React from 'react';
import './InputUI.css'

import Button from './Button';

class InputUI extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            line: ''
        }
    }

    //add char to line string
    addChar(charToAdd){
        let lineCopy = this.state.line;

        //multiple . prevention
        if(charToAdd !== '.' && !lineCopy.includes('.')){
            this.setState({line : lineCopy + charToAdd});
        }

    }

    //remove last char in line string
    removeChar(){

        let lineCopy = this.state.line;
        this.setState({line : lineCopy.slice(0, -1)})
    }

    //pass value of string to calculator component
    passToCalculator(){

        //from string to float
        let num = parseFloat(this.state.line);

        //empty input defence
        if(!isNaN(num)){
            this.props.addToCalculator(num);

            this.setState({line : ''})
        }

    }

    render() {
        return (
            <div className="inputUI">
                <p>{this.state.line}</p>

                <div className="Buttons">
                    <Button value={1} onClick={this.addChar.bind(this, 1)}/>
                    <Button value={2} onClick={this.addChar.bind(this, 2)}/>
                    <Button value={3} onClick={this.addChar.bind(this, 3)}/>
                    <Button value={4} onClick={this.addChar.bind(this, 4)}/>
                    <Button value={5} onClick={this.addChar.bind(this, 5)}/>
                    <Button value={6} onClick={this.addChar.bind(this, 6)}/>
                    <Button value={7} onClick={this.addChar.bind(this, 7)}/>
                    <Button value={8} onClick={this.addChar.bind(this, 8)}/>
                    <Button value={9} onClick={this.addChar.bind(this, 9)}/>
                    <Button value={'.'} onClick={this.addChar.bind(this, '.')}/>
                    <Button value={0} onClick={this.addChar.bind(this, 0)}/>
                    <Button value={'<-'} onClick={this.removeChar.bind(this)}/>
                </div>

                <Button value={'->'} onClick={this.passToCalculator.bind(this)}/>

            </div>

        );
    }

}
export default InputUI;