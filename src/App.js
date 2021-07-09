import React from 'react';
import Cart from './Cart';
import Navbar from './Navbar';
import firebase from 'firebase/app';
// import './App.css';

class App extends React.Component {
  constructor(){
    super();
    this.state={
        products:[],
        loading: true
    }
    this.db=firebase.firestore();
}

componentDidMount(){
  this.db
  .collection('products')
  // .where('price','>',999)
  // .where('title','==','car')
  .onSnapshot((snapshot)=>{
    const products=snapshot.docs.map((doc)=>{
      const data=doc.data();
      data['id']=doc.id
      return data;
    })
    this.setState({
      products,
      loading: false
    })
  })
}

handleIncreaseQuantity=(product)=>{
    const {products}=this.state;
    const index=products.indexOf(product);

   const docRef=this.db
     .collection('products')
     .doc(products[index].id);

     docRef.update({
       qty:products[index].qty+1
     })
     .then(()=>{
       console.log('document updated successfully');
     })
     .catch((err)=>{
       console.log('Error :',err);
     })

}
handleDecreaseQuantity=(product)=>{
    const {products}=this.state;
    const index=products.indexOf(product);
    if(products[index].qty===0) return ;
     
    const docRef=this.db
     .collection('products')
     .doc(products[index].id);

     docRef.update({
       qty:products[index].qty-1
     })
     .then(()=>{
       console.log('document updated successfully');
     })
     .catch((err)=>{
       console.log('Error :',err);
     })
}
handleDeleteProduct=(id)=>{
    const {products}=this.state;
   const docRef=this.db.collection('products').doc(id);
   docRef.
   delete()
   .then(()=>{
    console.log('document updated successfully');
  })
  .catch((err)=>{
    console.log('Error :',err);
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
   return totalPrice+=(product.qty * product.price);
  })
  return totalPrice;
}
addProduct=()=>{
  this.db
  .collection('products')
  .add({
    img:'',
    price:4000,
    qty:1,
    title:"Washing Machine"
  })
  .then((docRef)=>{
    console.log('Product has been added', docRef);
  })
  .catch((error)=>{
    console.log('error',error);
  })
}
  render (){
    const {products,loading}=this.state;
  return (
    <div className="App">
     
     <Navbar count={this.getCartCount()} />
     {/* <button onClick={this.addProduct} style={{padding:20,fontSize:20}}>Add Product</button> */}
     <Cart  
      products={products}
      key={products.id}
      onIncreaseQuantity={this.handleIncreaseQuantity}
      onDecreaseQuantity={this.handleDecreaseQuantity}
      onDeleteProduct={this.handleDeleteProduct} 
      />
      {loading && <h1>Loading products....</h1>}
      {
     !loading&&
    <div style={{padding:10,frontsize:25}}> 
      Total-Price: {this.getTotalPrice()}
    </div>
    
  }
    </div>
  );
  }
}

export default App;
