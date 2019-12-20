import React, { Component } from 'react'

import Products from './Components/Products'

import AlreadyBuy from './Components/AlreadyBuy'


import { connect } from 'react-redux';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

//import React from "react";




class App extends Component {
    constructor(props) {
        super(props)

        this.state = {

            listproduct: this.props.todos,
            cart: [
                // {
                //     soLuong: 2,
                //     product: {
                //         id: 1,
                //         Name: "Iphone 5",
                //         source: "https://images-na.ssl-images-amazon.com/images/I/71oip7WhHiL._SX569_.jpg",
                //         Price: 6000000,
                //         status: false
                //     }
                // }
            ],
            phone: 0


        }
    }



    // componentWillMount(){
    //     var cart = localStorage.getItem('cart') ? localStorage.getItem('cart') : console.log('sdad');
    //     if(cart.length){
    //         this.setState({
    //             cart: cart
    //         })
    //     }else{
    //         console.log('Nul');
    //     }

    setLocalstorage = () => {
           var {cart}= this.state;
         localStorage.setItem('cart', JSON.stringify(cart));
         console.log(localStorage.getItem('cart'));
        //     localStorage.setItem('x');
        //     localStorage.x=cart;
        //     // localStorage.cart= cart;
        //     console.log(localStorage.c);


    }
    Deletecart = () => {
        // console.log(this.state.cart);

        var { cart } = this.state;
        cart = [];
        this.setState({
            cart: cart
        })

    }

    changeQuantity = (id, soluong) => {
        var { cart } = this.state;

        cart.forEach((value) => {
            if (value.product.id === id) {
                value.soLuong = soluong
            }
        });

        this.setState({
            cart: cart
        })
    }



    addToCart = (product) => {
        var { cart } = this.state;
        var kt = false;
        cart.forEach((value) => {
            if (value.product.id === product.id) {
                value.soLuong++;
                kt = true;
            }
        });
        if (kt === false) {
            cart = [...cart, {
                soLuong: 1,
                product: product
            }];
        }

        this.setState({
            cart: cart
        })

    }


    changeProperty = (text) => {
        this.setState({
            phone: text
        })

    }



    onDelete = (index) => {

        var cart = this.state.cart;

        var listCart = [];
        listCart = cart.filter(x => x.product.id !== index.id);

        this.setState({
            cart: listCart
        });
    }

    render() {



        return (
            <Router>

                <div>
                    <div>
                        <nav className="navbar navbar-inverse">
                            <ul className="nav navbar-nav">
                                <li>
                                    <Link to="/">Home</Link>
                                </li>
                                <li>
                                    <Link to="/about">About</Link>
                                </li>

                            </ul>
                        </nav>
                    </div>
                    <Switch>
                        <Route exact path="/">

                            <li>Filter by price of Phone</li>
                            <div className="row">
                                <div className="col-lg-3">
                                    <button type="button" className="form-control" onClick={() => this.changeProperty(1)}> {"<=5.000.000"}</button>
                                    <button type="button" className="form-control" onClick={() => this.changeProperty(2)}>{"Từ 5.000.000 -> 8.000.000"}</button>
                                    <button type="button" className="form-control" onClick={() => this.changeProperty(3)}>8.000.000 Trở lên </button>
                                    <button type="button" className="form-control" onClick={() => this.changeProperty(0)}>Toàn bộ hàng </button>
                                </div>


                                <div className="col-lg-9">
                                    <Products addToCart={this.addToCart} Button={this.state.phone} />
                                </div>

                            </div>


                        </Route>
                        <Route path="/about">

                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                <button className="btn btn-primary" onClick={() => this.Deletecart()}>xóa giỏ hàng</button>
                                <button className="btn btn-primary" onClick={() => this.buy()}>Mua toàn bộ hàng </button>
                            </div>
                            <AlreadyBuy cart={this.state.cart} changeQuantity={this.changeQuantity} onDelete={this.onDelete} />
                            {this.setLocalstorage()}
                        </Route>

                    </Switch>
                </div >

            </Router>
        )



    }



}

const mapStateToProps = (st) => {
    return {
        todos: st.task
    }
}
export default connect(mapStateToProps, null)(App)
