import React from 'react';
import MenuLists from './MenuLists';
import { connect } from 'react-redux';
import * as itemBuilderAction from '../../actions';

class MenuBuilder extends React.Component {

    componentDidMount() {
        this.props.displayFoodList();
    }

    viewDetailHandler = (id) => {
        let itemWanted = null;
        for (let item of this.props.lists) {
            if (item.name === id) {
                itemWanted = item;
            }
        }

        const queryParam = [];

        for (let item in itemWanted) {
            queryParam.push(encodeURIComponent(item) + '=' + encodeURIComponent(itemWanted[item]));
        }
        const queryString = queryParam.join("&");

        this.props.history.push({
            pathname: '/viewdetail',
            search: '?' + queryString
        });
    }
    addItemToOrderListHandler = (id) => {
        let itemWanted = null;
        for (let item of this.props.lists) {
            if (item.name === id) {
                itemWanted = item;
            }
        }
        this.props.addItemToOrder(itemWanted);
    }
    render() {
        return <div>
            <MenuLists
                menu={this.props.lists}
                detail={this.viewDetailHandler}
                orderItem={this.addItemToOrderListHandler}
            />
        </div>;
    }
}

const mapStateToProps = state => {
    return {
        lists: state.ItemBuilder.listFoods
    }
}

const mapDispatchToProps = dispatch => {
    return {
        displayFoodList: () => dispatch(itemBuilderAction.displayItemLists()),
        // addItemToOrder: (item) => dispatch(itemBuilderAction.addItemToOrderList(item))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MenuBuilder);
