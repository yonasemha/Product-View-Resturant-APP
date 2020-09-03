import React from "react";
import Star from './starRating'

class comments extends React.Component {
    render() {
        return (
            <div>
                <ul>
                    <li>Customer Name: <strong>{this.props.name}</strong></li>
                    <li>Customer comment: {this.props.comment}</li>
                    
                <Star/>

                </ul>
            </div>
        );
    }
}

export default comments;
