import React from 'react'
import { Redirect, Route,Switch } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Service from './Service';
import Navbar from './Navbar';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import "../../node_modules/bootstrap/dist/js/bootstrap.bundle"

const Rapp = () => {
    return (
        <div>
            <Navbar/>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/about' component={About} />
                <Route path='/contact' component={Contact} />
                <Route path='/service' component={Service} />
                <Redirect to ="/"/>
            </Switch>
        </div>
    )
}

export default Rapp