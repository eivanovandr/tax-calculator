import React from 'react';


class Item extends React.Component {

    render() {
        return(
            <div className="item">
                <p>{this.props.cost}</p>
            </div>
        )
    }

}

export default Item;