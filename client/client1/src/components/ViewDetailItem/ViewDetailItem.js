import React,{Component} from 'react';
import ItemDetail from './ItemDetail/ItemDetail';

class ViewDetailItem extends Component {
    state={
        itemdetail:{
        name:"tibsssssss",
        price:20,
        description:"very good",
        }
    }

    componentDidMount(){
        const query =new URLSearchParams(this.props.location.search);
        const itemDetails = {};

        for(let param of query.entries()){
            itemDetails[param[0]]=param[1];
        }
        console.log(itemDetails);
        this.setState({itemdetail:itemDetails})
        console.log(this.state.itemdetail)
    }

    continueOrderHandler =()=>{

    }
    goBackHandler=()=>{
        this.props.history.goBack();
    }
    render(){
        return(
            <ItemDetail 
    name={this.state.itemdetail.name}
    price={this.state.itemdetail.price}
    description={this.state.itemdetail.description}
    key={this.state.itemdetail.name}
    OrderIt ={this.continueOrderHandler}
    goBack ={this.goBackHandler}
    />
        )
    }
} 


export default ViewDetailItem;