import React from 'react';
import Cart from './Cart';
import Navbar from './Navbar'
// import './App.css';

class App extends React.Component {
  constructor(){
    super();
    this.state={
        products:[
       {
        price:99,
        title:'Watch',
        qty:1,
        img:'https://images.unsplash.com/photo-1524805444758-089113d48a6d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8d2F0Y2h8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=60',
        id:1
       },
       {
        price:999,
        title:'phone',
        qty:1,
        img:'https://images.unsplash.com/photo-1534536281715-e28d76689b4d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHBob25lfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=60',
        id:2
       },
       {
        price:9999,
        title:'Laptop',
        qty:1,
        img:'https://images.unsplash.com/photo-1603302576837-37561b2e2302?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1048&q=80',
        id:3
       }
        ]
    }
}
handleIncreaseQuantity=(product)=>{
    const {products}=this.state;
    const index=products.indexOf(product);
    products[index].qty+=1;
    this.setState({
        products:products
    })
}
handleDecreaseQuantity=(product)=>{
    const {products}=this.state;
    const index=products.indexOf(product);
    if(products[index].qty===0) return ;
    products[index].qty-=1;
    
    this.setState({
        products:products
    })
}
handleDeleteProduct=(id)=>{
    const {products}=this.state;
    const items=products.filter((item)=>item.id!==id);
  
    this.setState({
        products:items
    })
}
getCartCount=()=> {
  const {products}=this.state;
  let count=0;
  products.forEach((product)=>{
    count+=product.qty;
  })
  return count;
}
getTotalPrice=()=>{
  const {products}=this.state;
  let totalPrice=0;
  products.map((product)=>{
    totalPrice+=(product.qty * product.price);
  })
  return totalPrice;
}
  render (){
    const {products}=this.state;
  return (
    <div className="App">
     
     <Navbar count={this.getCartCount()} />
     <Cart  
      products={products}
      key={products.id}
      onIncreaseQuantity={this.handleIncreaseQuantity}
      onDecreaseQuantity={this.handleDecreaseQuantity}
      onDeleteProduct={this.handleDeleteProduct} 
      />
    <div style={{padding:10,frontsize:25}}> 
      Total-Price: {this.getTotalPrice()}
    </div>
    </div>
  );
  }
}

export default App;
