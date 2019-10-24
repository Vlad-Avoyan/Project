import React from 'react';
import './App.css'
import Head from './components/header/Header';
import Table from './components/introduce/Introduce';
import Slider from './components/slider/Slider';

const App = () => {
    return (
        <div >
           <Head />
           <Table />
           <Slider />
        </div>
    );
}
export default App;