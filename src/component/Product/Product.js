import React from 'react';
import './Product.css'

const Product = (props) => {
        return (
            <div className="product">
            <img className="product_img" src={props.productInfo.image_url} alt=""/>
            <div className="product_box">
                <p className="product_title">{props.productInfo.name}</p>
                <p className="product_price">{props.productInfo.price}</p>
                <button>delete</button>
                <button>update</button>
            </div>
        </div>
        )
    }  

 export default Product;