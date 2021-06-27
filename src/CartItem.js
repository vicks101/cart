import React from 'react';
class CartItem extends React.Component{
    render(){
        return(
         <div className="cart-item">
         <div className="left-block">
           <img style={styles.image} />
         </div >
         <div className="right-block">
         <div>Phone</div>
         <div>Rs 99</div>
         <div>QTY: 1</div>
          <div className="cart-item-actions"></div>
         </div>
          
         </div>   
        
        );
    }
}
const styles = {
  image:{
      height:120,
      width:110,
      borderRadious:5,
      background:'#ccc'
  }
}
export default CartItem;