import logo from './logo.svg';
import './App.css';
import productsData from './data/productsData'
import {Component} from 'react'
import Navbar from './components/Navbar'
import ProductsList from './components/ProductsList'
import Form  from'./components/Form'
import ShoppingCart from "./components/ShoppingCart"

class App extends Component{
  state = {
    shoppingCartItems: [],
    productsData: productsData,
    productItem: "",
    productBrand: "",
    productUnits: "",
    productQuantity: 0
  }
  addNewProduct(){
    this.setState({productsData: [...this.state.productsData,{}]})
  }
  //update the value from the input
  handleChange = (event) =>{
    console.log(event.target.value)
    this.setState({[event.target.id] : event.target.value})
    // this.state.value = event.target.value

  }

  handleSubmit = (event) =>{
    event.preventDefault()
    //create a new product object
    const newProduct = {
      item: this.state.productItem,
      brand: this.state.productBrand,
      units: this.state.productUnits,
      quantity: this.state.productQuantity,
      isPurchased: true
    }

    console.log(newProduct)
    
    //set the new values in the state
    this.setState({
      productsData: [newProduct,...this.state.productsData],
      productItem: "",
    productBrand: "",
    productUnits: "",
    productQuantity: 0
    
    
    })
  }

  addToCart = (product) => {
    console.log(product);
    this.setState({shoppingCartItems:[product,  ...this.state.shoppingCartItems] })
  }
  
  render(){
    return (
      <div className="App">
       <Navbar/>
       <ShoppingCart shoppingCartItems={this.state.shoppingCartItems}/>

       <Form 
       handleSubmit={this.handleSubmit} 
       handleChange={this.handleChange} 
       productItem={this.state.productItem}
       productBrand={this.state.productBrand}
       productUnits={this.state.productUnits}
       productQuantity={this.state.productQuantity}
       />

       <ProductsList products={this.state.productsData} addToCart={this.addToCart}/>
      </div>
    );
  }

}

export default App;
