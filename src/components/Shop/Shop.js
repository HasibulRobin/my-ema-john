import React, { useEffect, useState } from 'react';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'
const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    const [displayProducts, setDisplayProducts] = useState([]);
    useEffect(() => {
        fetch('./products.JSON')
            .then(res => res.json())
            .then(data => {
                setDisplayProducts(data)
                setProducts(data)
            })
    }, []);
    useEffect(() => {
        const savedCart = getStoredCart();
        if (products.length) {
            const addedCart = [];
            for (const key in savedCart) {
                // console.log(key, savedCart[key]);
                const addedProduct = products.find(product => product.key === key);
                addedProduct.quantity = savedCart[key]
                console.log(addedProduct.quantity);
                addedCart.push(addedProduct)
            }
            setCart(addedCart)
        }
    }, [products]);
    const handleAddToCart = product => {
        const newCart = [...cart, product];
        setCart(newCart);

        // set to local storage (for now)
        addToDb(product.key)
    };
    const handleSearch = event => {
        const searchText = event.target.value;
        const matchedProducts = products.filter(product => product.name.toLowerCase().includes(searchText.toLowerCase()));
        setDisplayProducts(matchedProducts);
    }
    return (
        <div>
            <div className="input-container">
                <input
                    type="text"
                    placeholder="Search Product"
                    onChange={handleSearch}
                />
            </div>
            <div className="shop-container">
                <div className="product-container">
                    <h1>Products:{products.length}</h1>
                    {
                        displayProducts.map(product => <Product
                            key={product.key}
                            product={product}
                            handleAddToCart={handleAddToCart}
                        ></Product>)
                    }
                </div>
                <div className="cart-container">
                    <Cart cart={cart}></Cart>
                </div>
            </div>
        </div>

    );
};

export default Shop;