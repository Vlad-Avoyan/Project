import React from 'react';
import './App.css'
import Head from './components/header/Header';
import Table from './components/introduce/Introduce';
import Slider from './components/slider/Slider';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

const App = () => {
    return (
        <Router>
            <div>
                <Head />
                <Switch>
                    <Route path='/home' component={Table} />
                    <Route path='/about' component={Slider} />
                </Switch>
            </div>
        </Router>
    );
}
export default App;