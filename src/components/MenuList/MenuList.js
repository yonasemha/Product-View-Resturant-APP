import React, { Component } from "react";
import { withRouter } from 'react-router-dom'
import { Button } from "react-bootstrap";

const MenuList = (props) => {
    console.log(props)

    return (
        <div style={{ width: '400px', marginLeft: '80px' }}>
            <div className="" onClick={props.postClicked}>
                <div className=" mb-5">
                    {/* <div className="col-lg-4 mb-4 grid-margin"> */}
                    <div className="card h-100">
                        <h4 className="card-header">Card Title : {props.id}</h4>
                        <div className="card-body">
                            <p className="card-text">
                                {props.title}
                            </p>
                        </div>
                        <div className="card-footer">
                            <Button variant="btn btn-primary">Learn More</Button>
                        </div>
                    </div>
                </div>
                {/* </div> */}
            </div>
        </div>

    );
}

export default withRouter(MenuList);
