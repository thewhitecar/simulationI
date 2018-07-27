import React, {Component} from 'react';
import './Dashboard.css'
import Product from '../Product/Product';

export default class Dashboard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            products: []
        }
    }

    render() {
        console.log(this.props.productInfo)
        return ( 
            <div className = "dash"> 

                 {this.props.productInfo.map((e, index) => {
                     return(
                         <Product productInfo={e}/>
                     )
                 })
                }
                </div>)}}
        