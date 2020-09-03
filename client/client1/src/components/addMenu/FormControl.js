import React, { Component } from "react";
import { Link } from 'react-router-dom';

import AddMenu from "./AddToMenu";
import "./FormControl.css";
import { connect } from "react-redux";
import * as addItemBuilderAction from "../../actions";
import ItemList from './itemlists';
import './itemlist.css';

class FormControl extends Component {
    componentDidMount() {
        this.props.getAdminList();
        console.log("formcontrol", this.props.item);
    }

    state = {
        formTypes: {
            foodName: {
                label: "Food Name",
                inpuType: "input",
                value: "",
                configType: {
                    placeholder: "Please enteer your food name",
                    type: "text",
                },
                validation: {
                    type: String,
                    required: true,
                    minLength: 5,
                    maxLength: 10,
                },
                valid: false,
            },

            foodprice: {
                label: "Food Price",
                inpuType: "input",
                value: "",
                configType: {
                    placeholder: "Please enteer your Food Price",
                    type: "number",
                },
                validation: {
                    type: Number,
                    required: true,
                    minLength: 1,
                    maxLength: 10,
                },
                valid: false,
            },
            file: {
                label: "Food Image",
                inpuType: "file",
                value: "",
                configType: {
                    placeholder: "Please enter your Food Image",
                    type: "file",
                },
                validation: {
                    type: String,
                    required: true,
                    minLength: 1,
                    maxLength: 2,
                },
                valid: false,
            },
            Description: {
                label: "Food Ingredients",
                inpuType: "textarea",
                value: "",
                configType: {
                    placeholder: "Please enteer your food Ingredients",
                    type: "textarea",
                },
                validation: {
                    type: String,
                    required: true,
                    minLength: 5,
                    maxLength: 200,
                },
                valid: false,
            },
        },
    };

    checkValidityForm(value, rules) {
        let isValid = true;
        if (rules.required) {
            isValid = value.trim() !== "" && isValid;
        }
        if (rules.required) {
            isValid = value.length >= rules.minLength && isValid;
        }
        if (rules.required) {
            isValid = value.length <= rules.maxLength && isValid;
        }
        return isValid;
    }

    inputChangeHandler = (event, elemetRequired) => {
        const updatedForm = {
            ...this.state.formTypes,
        };
        const updatedFormElement = {
            ...updatedForm[elemetRequired],
        };
        updatedFormElement.value = event.target.value;
        updatedFormElement.valid = this.checkValidityForm(
            updatedFormElement.value,
            updatedFormElement.validation
        );
        updatedForm[elemetRequired] = updatedFormElement;
        //console.log(updatedFormElement);
        this.setState({ formTypes: updatedForm });
    };
    inputPostHandler = () => {
        const item = {
            name: this.state.formTypes.foodName.value,
            price: this.state.formTypes.foodprice.value,
            image: this.state.formTypes.file.value,
            description: this.state.formTypes.Description.value,
        };

        this.props.addItemToDatabase(item);
    };

    deleteItemHandler = (id) => {
        this.props.deleteItem(id);
    }
    render() {
        let formArray = [];
        for (let key in this.state.formTypes) {
            formArray.push({
                id: key,
                config: this.state.formTypes[key],
            });
        }

        let form = (
            <div>
                {formArray.map((item) => {
                    return (
                        <AddMenu
                            inpuType={item.config.inpuType}
                            key={item.id}
                            value={item.config.value}
                            label={item.config.label}
                            placeholder={item.config.configType.placeholder}
                            type={item.config.configType.type}
                            change={(event) => this.inputChangeHandler(event, item.id)}
                            list={this.props.item}
                        />
                    );
                })}
            </div>
        );
        //
        const itemList = (
            <div className="ItemList">
                {this.props.item.map((item) => {
                    return (
                        <ItemList
                            name={item.name}
                            price={item.price}
                            description={item.description}
                            key={item._id}
                            delete={() => this.deleteItemHandler(item._id)}
                        // order={() => props.orderItem(item.name)}
                        />
                    );
                })}
            </div>
        );
        //
        return (
            <div>
                {form}
                <Link type="submit" style={{ marginLeft: "700px" }} onClick={this.inputPostHandler} to='/adminList'>
                    <button>Register form</button> </Link>

                <hr />
                {/* <h3 style={{ marginLeft: "500px" }}>The list of foods types we have.</h3> */}
                {/* <div style={{ marginTop: "32px" }} >{itemList}</div> */}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        item: state.ItemBuilder.listFoods,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        addItemToDatabase: (item) => dispatch(addItemBuilderAction.addItemToDatabase(item)),
        getAdminList: () => dispatch(addItemBuilderAction.displayItemLists()),
        deleteItem: (id) => dispatch(addItemBuilderAction.deleteItemById(id)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(FormControl);
