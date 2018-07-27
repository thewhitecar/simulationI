import React, { Component } from 'react';
import './App.css';
import Dashboard from './component/Dashboard/Dashboard';
import Form from './component/Form/Form';
import Header from './component/Header/Header';
import axios from 'axios';

class App extends Component {
  constructor(){
    super();
    this.state={
      products: []
    }
  }

  componentDidMount= () => {
    axios.get('/api/products/').then( response => {
        this.setState({
            products: response.data
        })
    })
}

  render() {
    return (
      <div className="App">
      <Header/>
      <Form/>
      <Dashboard productInfo={this.state.products}/>
      </div>
    );
  }
}

export default App;
