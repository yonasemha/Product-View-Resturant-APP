import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import jwt_decode from 'jwt-decode';
import setAuthToken from './setAuthToken';
import { setCurrentUser, logoutUser } from './actions/authentication';

import Navbar from './components/Navbar';
import Register from './components/Register';
import Login from './components/Login';
import Home from './components/Home';
import ViewDetailItem from './components/ViewDetailItem/ViewDetailItem';
import AddToMenu from './components/addMenu/FormControl';
import Comment from './components/Review/reviewDetails';
import AdminList from './components/addMenu/adminList';
import EditForm from './components/addMenu/EditForm';







import 'bootstrap/dist/css/bootstrap.min.css';

import MenuBuilder from './components/itemList/MenuBuilder';

if (localStorage.jwtToken) {
    setAuthToken(localStorage.jwtToken);
    const decoded = jwt_decode(localStorage.jwtToken);
    store.dispatch(setCurrentUser(decoded));

    const currentTime = Date.now() / 1000;
    if (decoded.exp < currentTime) {
        store.dispatch(logoutUser());
        window.location.href = '/login'
    }
}

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Router>
                    <div>
                        <Navbar />
                        <Route exact path="/" component={MenuBuilder} />
                        <div className="container">
                            <Route exact path="/register" component={Register} />
                            <Route exact path="/login" component={Login} />
                            <Route path="/menulist" component={MenuBuilder} />
                            <Route path="/viewdetail" component={ViewDetailItem} />
                            <Route path="/addtomenu" component={AddToMenu} />
                            <Route path="/comment" component={Comment} />
                            <Route path="/adminList" component={AdminList} />
                            {/* <Redirect from='/' to='/' /> */} 
                            <Route path="/editForm" component={EditForm} />
                           



                        </div>
                    </div>
                </Router>
            </Provider>
        );
    }
}

export default App;
