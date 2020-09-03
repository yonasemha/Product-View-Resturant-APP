import React, { Component } from 'react';
import axios from 'axios';
import MenuList from '../components/MenuList/MenuList'
import MenuDetail from '../components/MenuDetail/MenuDetail'
//import AddMenu from '../components/AddMenu/AddMenu';
import { Route, Link, Switch, Redirect } from 'react-router-dom'
import MymenuList from '../components/MyMenuList/MymenuList';
import NavBar from '../components/Layout/NavBar'
import Carousel from '../components/Layout/carousel'
import AsyncComponent from '../hoc/asyncComponent';

const AsyncAddMenu = AsyncComponent(() => {
    return import('../forms/form')
})


class Container extends Component {

    state = {
        auth: true

    }


    render() {


        return (
            <div>
                <NavBar />
                {/* <Carousel /> */}
                {/* <header>
                    <nav>
                        <ul>
                            <li><Link to='/'>Home</Link></li>
                            <li><Link to='/add-menu'>Add-Menu</Link></li>
                        </ul>
                    </nav>
                </header> */}
                {/* <Switch> */}
                {this.state.auth ? <Route path='/add-menu' exact component={AsyncAddMenu} /> : null}
                {/* <Route path='/add-menu' exact component={AsyncAddMenu} /> */}
                <Route path='/' exact component={MymenuList} />
                <Route path='/:id' exact component={MenuDetail} />
                {/* </Switch> */}
            </div >
        )
    }
}


export default Container;