import React, { Component } from "react";
import { Link } from 'react-router-dom';

import { connect } from "react-redux";
import * as addItemBuilderAction from "../../actions";
import ItemLists from './itemlists';
import './itemlist.css';

class AdminList extends Component {

    componentDidMount() {
        this.props.getAdminList();
        console.log("formcontrol", this.props.item);
    }


    // delete an item 
    deleteItemHandler = (id) => {
        this.props.deleteItem(id);
    }

    // edit an item 
    findItemToeditHandler = (id) => {
        let itemWanted = null;
        console.log(";;;;;;;" ,this.props.item)
        for (let item of this.props.item) {
            if (item._id == id) {
                itemWanted = item;
                console.log(itemWanted)

            }
        }


        const queryParam = [];

        for (let item in itemWanted) {
            queryParam.push(encodeURIComponent(item) + '=' + encodeURIComponent(itemWanted[item]));
        }
        const queryString = queryParam.join("&");

        this.props.history.push({
            pathname: '/editForm',

            search: '?' + queryString
        });
    }
    /////
    render() {


        const itemLists = (
            <div className="ItemList">
                {this.props.item.map((item) => {
                    return (
                        <ItemLists
                            name={item.name}
                            price={item.price}
                            description={item.description}
                            key={item._id}
                            delete={() => this.deleteItemHandler(item._id)}
                            edit={() => this.findItemToeditHandler(item._id)}
                        // order={() => props.orderItem(item.name)}
                        />
                    );
                })}
            </div>
        );
        return (
            <div>

                {/* <Link type="submit" style={{ marginLeft: "700px" }} onClick={this.inputPostHandler} to='/menulist'>
                    <button>Register form</button> </Link> */}

                {/* <hr /> */}
                {/* <h3 style={{ marginLeft: "500px" }}>The list of foods types we have.</h3> */}
                <div style={{ marginTop: "32px" }} >{itemLists}</div>
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
        getAdminList: () => dispatch(addItemBuilderAction.displayItemLists()),
        deleteItem: (id) => dispatch(addItemBuilderAction.deleteItemById(id)),
        //editItem: (id) => dispatch(addItemBuilderAction.editItemById(id))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(AdminList);
