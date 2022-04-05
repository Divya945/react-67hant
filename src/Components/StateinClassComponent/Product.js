import React, {Component} from 'react';
import './Product.css'; 
//import products from '../../data/Products';

const products = [
    {
      emoji: '🍦',
      name: 'ice cream',
      price: 5
    },
    {
      emoji: '🍩',
      name: 'donuts',
      price: 2.5,
    },
    {
      emoji: '🍉',
      name: 'watermelon',
      price: 4
    }
  ];
export default class Product extends Component {
    state = {
        cart: [],
        total: 0
    }
    currencyOption = {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    }
    getTotal = () => {
        return this.state.total.toLocaleString(undefined, this.currencyOption)
    }
    add = (product) => {
        this.setState( state => ({
            cart : [...state.cart, product.name],
            total: state.total + product.price

        }))
    }
    remove = (product) => {
        this.setState( state => {
            const cart = [...state.cart]; 
            cart.splice(cart.indexOf(product.name))
            return({
                cart,
                total: state.total - product.price
            })
            const productIndex = cart.findIndex(p => p.name === product.name);
            if(productIndex < 0) {
              return;
            }
        })
    }
    render() {
        return(
            <div className = "product-wrapper">
                <div>Manage State on React Class Components</div>
                <div>
                    Shopping Cart: {this.state.cart.length} total items.
                </div>
                <div>Total: {this.getTotal()}</div>
                {/* <div className= "product">
                    <span role="img" aria-label="ice cream">🍦</span>
                    <button onClick = {this.add}>Add</button>
                    <button onClick = {this.remove}>Remove</button>
                </div> */}
                <div>
                    {products.map(product => (
                        <div key= {product.name}>
                            <div className="product">
                            <span role="img" aria-label={product.name}>{product.emoji}</span>
                            <button onClick = {() => this.add(product)}>Add</button>
                            <button onClick = {() => this.remove(product)}>Remove</button>
                            </div>
                        </div>
                    ))}
                </div>
                
            </div>
        )
    }
}