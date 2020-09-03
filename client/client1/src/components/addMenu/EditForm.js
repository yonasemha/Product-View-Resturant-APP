import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';

import "./FormControl.css";
import { connect } from "react-redux";
import * as addItemBuilderAction from "../../actions/index";
//import ItemList from './itemlists';
import './itemlist.css';



class EditForm extends Component {


    state = {
        form: {
            _id: '',
            name: '',
            price: '',
            image: '',
            description: ''
        }
    };

    componentDidMount() {
        const query = new URLSearchParams(this.props.location.search);
        const itemDetails = {};

        for (let param of query.entries()) {
            itemDetails[param[0]] = param[1];
        }
        // console.log(itemDetails);

        this.setState({ form: itemDetails })

        //this.setState({ editItem: itemDetails })
    }



    updateMenuHandler = () => {

        const item = {
            id: this.state.form._id,
            name: this.state.form.name,
            price: this.state.form.price,
            image: this.state.form.image,
            description: this.state.form.description
        };
  console.log("edit Haile After item " ,  item )
        this.props.updateItemToDatabase(item);
    };


    render() {

        const formEdit = <Form>
            <Form.Group >
                <Form.Label>Food Name </Form.Label>
                <Form.Control type="text" value={this.state.form.name} onChange={(e) =>  this.setState({ form: { name: e.target.value } })} />
            </Form.Group>
            <Form.Group >
                <Form.Label>Food Price </Form.Label>
                <Form.Control type="text" value={this.state.form.price} onChange={(e) =>  this.setState({ form: { price: e.target.value }}) } />

            </Form.Group><Form.Group>
                <Form.Label>Food Image  </Form.Label>
                <Form.Control value={this.state.form.image} onChange={(e) =>  this.setState({ form: { image: e.target.value } }) } />
            </Form.Group>

            <Form.Group >
                <Form.Label>Food Ingredients </Form.Label>
                <Form.Control type="text" value={this.state.form.description} onChange={(e) =>  this.setState({ form: { description: e.target.value }}) } />
            </Form.Group>

            <Button onClick={this.updateMenuHandler} variant="primary" type="button">
                Submit
           </Button>
        </Form>



        return (<div>{formEdit}</div>)

    }
}



const mapDispatchToProps = (dispatch) => {
    return {
        updateItemToDatabase: (item) => dispatch(addItemBuilderAction.updateItem(item))

    };
};

export default connect(null, mapDispatchToProps)(EditForm);
