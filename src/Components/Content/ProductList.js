import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Title from './Product Detail/Title';
import './ProductList.css';

class Product extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            finalPrice: 0,
            finalAmount: 0,
        };
    }

    updateProductOrder = (index) => {
        const product = products[index];

        this.setState({
            price: this.state.finalPrice + product.price,
            amount: this.state.finalAmount + 1,
        });


        /*let { products } = this.state;

        products[index].quantity = products[index].quantity + 1;
        products[index].totalPrice = products[index].totalPrice + products[index].price;
        this.state.finalPrice = this.state.finalPrice + products[index].price;
        this.state.finalAmount = this.state.finalAmount + 1;

        this.setState({
            amount: this.state.finalAmount,
            products
        });*/
        /*this.setState(prevState => {
            let newQuantity = prevState.products[index].quantity + 1;
            let newTotalPrice = prevState.products[index].totalPrice + prevState.products[index].price;
            this.state.products[index].quantity = newQuantity;
            this.state.products[index].totalPrice = newTotalPrice;
            this.state.finalPrice = prevState.finalPrice + prevState.products[index].price;
            this.state.finalAmount = prevState.finalAmount + 1;


            return {
                amount: this.state.finalPrice,
                data: this.state.data,
            };
        });*/
    };

    productDetail(product, index) {
        return (
            <div className="product">
                <h3 className="title">{product.productName}</h3>
                <div className="line"></div>
                <p className="totalPrice">$ <b className="number">{product.price}</b>.00</p>
                <p className="small-number">Amount: {product.quantity}</p>
                <p className="small-number">TotalPrice: {product.totalPrice}</p>
                <button type="submit" className="btn btn-primary btn-sm button-margin"
                        onClick={(e) => this.updateProductOrder(index)}>Add to cart</button>
            </div>
        );
    }

    /*returnProduct(products) {
        return products.map((value, index) => this.productDetail(value, index));
    }*/

    render() {
        return (
            <>
                <div>
                    <div className="position">
                        {/*{this.returnProduct(products)}*/}
                        {products.map((value, index) => this.productDetail(value, index))}
                    </div>
                    {/*<div className="fas fa-shopping-cart">
                            <p>Total Amount: <b>{this.state.finalAmount}</b></p>
                            <p>Final Price: $ <b className="number">{this.state.finalPrice}</b>.00</p>
                        </div>*/}
                </div>
            </>
        )
    }
}

function filter() {
    return (
        <div>
            <div>
                <h2>Type</h2>
            </div>
            <div>
                <h2>Brand</h2>
            </div>
        </div>
    )
}

const products = [
    {
        id: 1,
        productName: "Product A",
        price: 100,
        quantity: 0,
        totalPrice: 0,
    },
    {
        id: 2,
        productName: "Product B",
        price: 50,
        quantity: 0,
        totalPrice: 0,
    },
    {
        id: 3,
        productName: "Product C",
        price: 200,
        quantity: 0,
        totalPrice: 0,
    },
    {
        id: 4,
        productName: "Product D",
        price: 20,
        quantity: 0,
        totalPrice: 0,
    },
    {
        id: 5,
        productName: "Product E",
        price: 20,
        quantity: 0,
        totalPrice: 0,
    },
    {
        id: 6,
        productName: "Product F",
        price: 20,
        quantity: 0,
        totalPrice: 0,
    },
];

export default Product;