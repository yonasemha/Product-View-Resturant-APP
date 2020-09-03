import React, { Component } from 'react'
import axios from 'axios';

export default class MenuDetail extends Component {
    state = {
        list: null
    }

    componentDidMount() {
        console.log(this.props);
        if (this.props.match.params.id !== 0) {
            if (!this.state.list || this.state.list.id !== this.props.match.params.id)
                axios.get('/posts/' + this.props.match.params.id)
                    .then(res => {
                        this.setState({ list: res.data })
                    })
        }
    }
    render() {
        let list = <p>Please select a Post</p>
        if (this.props.match.params.id !== 0) {
            if (this.state.list) {
                list = (
                    <div className="MenuDetail">
                        <h1>{this.state.list.title}</h1>
                        <div className="Edit">
                            <button className="Delete">Delete</button>
                        </div>

                    </div>
                );
            }
        }
        return list

    }
}
