import React, { Component } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import axios from 'axios'

const AddMenu = (props) => {
    // state = {
    //     name: '',
    //     price: '',
    //     description: '',
    //     // image: ''
    // }

    // const postMenuHandler = (e) => {

    //     const newMenu = { ...this.state };

    //     axios.post("/posts/", newMenu)
    //         .then((res) => {
    //             console.log(res)

    //             // this.setState({ newMenu: res.data });
    //             // console.log(newMenu)
    //         })
    //     e.preventDefault()
    // }
    // render() {

    let inputElement = null;
    switch (props.elementType) {
        case ('input'):
            inputElement = <input
                value={props.value}
                {...props.elementConfig}
                onChange={props.changed}

            />
            break;
        case ('textarea'):
            inputElement = <textarea
                value={props.value}
                {...props.elementConfig}
                onChange={props.changed}

            />
            break;
        default:
            inputElement = <input
                value={props.value}
                {...props.elementConfig}
                onChange={props.changed}
            />
    }

    return (
        <div>
            <label >{props.label}</label>
            {inputElement}
            {/* <input /> */}

        </div>)
    // <div className="container">

    //     <Row center>
    //         <Col md={{ span: 8, offset: 2 }}>
    //             <Form onSubmit={(event) => this.postMenuHandler(event)}>
    //                 <Form.Group controlId="">
    //                     <Form.Label> {this.props.label} </Form.Label>
    //                     <Form.Control placeholder="food-name" value={this.state.name} onChange={(event) => this.setState({ name: event.target.value })} />
    //                 </Form.Group>

    // {/* <Form.Group controlId="">
    //     <Form.Label> Price</Form.Label>
    //     <Form.Control placeholder="price" value={this.state.price} onChange={(event) => this.setState({ price: event.target.value })} />
    // </Form.Group>
    // <Form.Group controlId="">
    //     <Form.Label>Description</Form.Label>
    //     <Form.Control placeholder="description" value={this.state.description} onChange={(event) => this.setState({ description: event.target.value })} />
    // </Form.Group>

    // <Form.Group controlId="formGridAddress2">
    //     <Form.Label>Image</Form.Label>
    //     <Form.Control type="file" placeholder="image" />
    // </Form.Group>
    // <Form.Group id="formGridCheckbox">
    //     <Form.Check type="checkbox" label="Check me out" />
    // </Form.Group> */}

    // {/* <Button variant="primary" type="submit" >
    //         Submit
    //   </Button> */}
    //                 </Form >
    //             </Col >
    //         </Row >

    //     </div >
    // );
    // // }
}

export default AddMenu;


