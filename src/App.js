import React, { Component } from 'react';
import Header from './Components/Layout/Header/Header';
import Shop from './Components/Shop/Shop';
import Footer from './Components/Layout/Footer/Footer';
import './App.css';

class App extends Component {
  render() {
    return (
        <>
            <div className="">
                <Header />
                <Shop />
                <Footer />
            </div>
        </>
    );
  }
}

export default App;
