import React from 'react';
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import Rating from 'react-rating';
const Product = (props) => {
    // console.log(props);
    const { name, price, seller, img, stock, star } = props.product;
    // const element = <FontAwesomeIcon icon={faShoppingCart} />
    return (
        <div className="product">
            <div>
                <img src={img} alt="" />
            </div>
            <div>
                <h3 className="product-name">{name}</h3>
                <p><small>by:{seller}</small></p>
                <p>Price : {price}</p>
                <p><small>only {stock} left in stock - order soon</small></p>
                <Rating
                    initialRating={star}
                    emptySymbol="far fa-star icon-color"
                    fullSymbol="fas fa-star icon-color"
                    readonly
                ></Rating>
                <br />
                <br />
                <button
                    onClick={() => props.handleAddToCart(props.product)}
                    className="btn-regular"
                > <FontAwesomeIcon icon={faShoppingCart} />add to cart</button>
            </div>
        </div>
    );
};

export default Product;