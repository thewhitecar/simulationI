import React, { Component } from 'react';
import './Form.css';
import axios from 'axios';

export default class Form extends Component{
    constructor(){
        super();
        this.state={
            productsArray: [],
            urlInput: "",
            productInput: "",
            priceInput:"",
            imagePreview: "https://cdn4.iconfinder.com/data/icons/prohibited/100/16-512.png"
        }
    }

    handleUrlInput = (e) => {
        this.setState({
            urlInput: e.target.value,
            imagePreview: e.target.value
        })
    }

    handleProductInput = (e) => {
        this.setState({
            productInput: e.target.value
        })
    }

    handlePriceInput = (e) => {
        this.setState({
            priceInput: e.target.value
        })
    }

    handleCancelClick = () => {
        this.setState({
            imagePreview: "https://cdn4.iconfinder.com/data/icons/prohibited/100/16-512.png",
            urlInput: "",
            productInput: "",
            priceInput:""
        })
    }

    handleAddClick = () => {
        let obj = {
            prodcut: this.state.productInput,
            price: this.state.priceInput,
            image_url: this.state.urlInput
        };
        axios.post('/api/products', obj).then(response => {
            this.setState({
                productsArray: response.data,
                imagePreview: "https://cdn4.iconfinder.com/data/icons/prohibited/100/16-512.png",
                urlInput: "",
                productInput: "",
                priceInput:""
            })
        })}


    render(){
        return (
            <div className="form">
               <img className="form_image_preview" src={this.state.imagePreview}/>
               <p>Image URL:</p>
               <input type="text" value={this.state.urlInput} onChange={this.handleUrlInput}/>
               <p>Product Name:</p>
               <input type="text" placeholder="" value={this.state.productInput} onChange={this.handleProductInput}/>
               <p>Price:</p>
               <input type="number" pattern="[0-9]" placeholder="0" value={this.state.priceInput} onChange={this.handlePriceInput}/>
               <div class="form_button_box">
                  <button className="buttons" onClick={this.handleCancelClick}>Cancel</button>
                  <button className="buttons" onClick={this.handleAddClick}>Add To Inventory</button>
            </div>
            </div>
        )
    }
}