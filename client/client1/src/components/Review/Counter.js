import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Counter.css';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
//import reducer from '../../store/actions';
import * as actionTypes from '../../store/actions';
class Counter extends Component {

    componentDidMount() {
        // this.props.onFetchPostAsync();
        this.props.onLogin()

    }

    componentDidUpdate() {
        // this.props.onFetchPostAsync();
        if (!this.props.users) {
            this.props.onFetchUsers(this.props.token);
        }
    }


    render() {
        //console.log(this.props)
        return (

            < div className='container' >
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={() => this.props.onIncrementCounter()} />
                <CounterControl label="Decrement" clicked={() => this.props.onDecrementCounter()} />
                <CounterControl label="Add 5" clicked={() => this.props.onAdd5()} />
                <CounterControl label="Subtract 5" clicked={() => this.props.onSub5()} />
                <button className="button" onClick={() => this.props.onStoreResult(this.props.ctr)}>Store Result</button>
                <ul>
                    {
                        this.props.storedResult.map((item, index) => {
                            return (
                                <li className='resultsItem' key={index} onClick={() => this.props.onDeleteItem(index)}>
                                    {item}</li>
                            )
                        })
                    }
                </ul>
                <hr />
                {/* <ol>
                    {
                        this.props.posts ? this.props.posts.map(item => {
                            return (<li key={item.id}>  {item.title}
                            </li>)
                        }) : null
                    }
                </ol> */}
                {/* <Container className='p-3'> */}

                <ol>
                    {
                        this.props.users ? this.props.users.map(item => {
                            return (<li key={item.id}>  {item.email}
                            </li>)
                        }) : null
                    }
                </ol>

                {/* </Container> */}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        ctr: state.ctr.counter,
        storedResult: state.res.results,
        posts: state.ctr.posts,
        users: state.ctr.users,
        token: state.ctr.token

    }
}


const mapDispatchToProps = dispatch => {
    return {
        onIncrementCounter: () => { dispatch(actionTypes.increment()) },
        onDecrementCounter: () => dispatch({ type: actionTypes.DEC, value: 1 }),
        onAdd5: () => dispatch(actionTypes.add(4)),
        onSub5: () => dispatch({ type: actionTypes.SUB5, value: 5 }),
        // onStoreResult: (currentCounter) => {
        //  dispatch({ type: actionTypes.STORE_RESULT, value: currentCounter })
        //     },
        onStoreResult: (currentCounter) => { dispatch(actionTypes.storeResult(currentCounter)) },

        onDeleteItem: (id) => dispatch({ type: actionTypes.DELETE_ITEM, key: id }),
        onFetchPostAsync: () => dispatch(actionTypes.fetchPostAsync()),
        onFetchUsers: (token) => dispatch(actionTypes.fetchUsers(token)),
        onLogin: () => dispatch(actionTypes.login())

    }

}


export default connect(mapStateToProps, mapDispatchToProps)(Counter);