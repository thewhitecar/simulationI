import React, { Component } from 'react';
import './Dashboard.css'
import Product from '../Product/Product';

export default class Dashboard extends Component{
    constructor(){
        super();
        this.state={
            products: []
        }
    }

    render(){
        var productsMap =this.state.products.map(p => {
            return <Product/>})
        return (
            <div className="dash">
               <div>{productsMap}</div>
            </div>
        )
    }
}