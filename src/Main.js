import React, { Component } from 'react'
import {BrowserRouter as Router, Switch, Route, NavLink, Link} from 'react-router-dom';
import App from './App';
import Home from './Home'



class Main extends Component {

    render() {
        return (
            <Router>
                <Switch>
                    <Route path="/comienzo" component={App}/>
                    <Route path="/" component={Home}/>
                </Switch>
            </Router>
        )
        
    }
}

export default Main
