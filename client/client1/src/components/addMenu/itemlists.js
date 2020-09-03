import React from "react";
import { Button } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Redirect, Link } from 'react-router-dom';



class itemlists extends React.Component {
    state = {};

    render() {
        return (
            <div>
                <div style={{ width: "400px", marginLeft: "80px" }}>
                    <div className="mb-5">
                        <div className="card h-100">
                            <h4 className="card-header">Card Title</h4>
                            <div className="card-body">
                                <p>{this.props.name}</p>
                                <p>{this.props.price}</p>
                                <p>{this.props.description}</p>
                                <p className="card-text">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                    Sapiente esse necessitatibus neque.
                </p>
                            </div>
                            <div className="card-footer">
                                <Button
                                    onClick={this.props.edit}
                                    style={{ borderRadius: "10px" }}
                                    variant="btn btn-primary"
                                >
                                    Edit
                </Button>

                                <Button
                                    onClick={this.props.delete}
                                    style={{ marginLeft: "180px", borderRadius: "10px" }}
                                    variant="btn btn-danger"
                                > Delete
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default itemlists;
