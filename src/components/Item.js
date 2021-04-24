import React from 'react';


class Item extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            id : props.id,
            value : props.value
        }
    }

    delete(){
        this.props.deleteItem(this.state.id);
    }

    render() {
        return(
            <div className="item">
                <p>{this.state.id}</p>
                <p>{this.state.value}</p>
                <button onClick={this.delete.bind(this)}>x</button>
            </div>
        )
    }

}

export default Item;