import React from 'react';
class CartItem extends React.Component{
    // super();
    
    increaseQuantity=()=>{
        this.setState((prevState)=>{
            return {
                qty:prevState.qty+1
            }
        });
    }
    decreseQuantity=()=>{
        this.setState((prevState)=>{
            if(prevState.qty==0) return;
            return {
                
                qty:prevState.qty-1
            }
        });
    }
    
    render(){
        const {price,title,qty}=this.props.product;
        return(
         <div className="cart-item">
         <div className="left-block">
           <img style={styles.image} />
         </div >
         <div className="right-block">
         <div>{title}</div>
         <div>Rs:{price} </div>
         <div>QTY:{qty}</div>
          <div className="cart-item-actions">
          <img 
           alt="increase"
           className="action-icons"
            src="https://img-premium.flaticon.com/png/512/1008/premium/1008978.png?token=exp=1624814028~hmac=6a25f10a05591a497ccb2df83b882d05"
            onClick={this.increaseQuantity}
            />
           <img alt="decrease"
             className="action-icons"
             src="https://image.flaticon.com/icons/png/512/1828/1828899.png"
             onClick={this.decreseQuantity}
             />
           <img 
             alt="delete"
              className="action-icons"
               src="https://img-premium.flaticon.com/png/512/4389/premium/4389757.png?token=exp=1624813577~hmac=d7d963cc2c5a9d0c68950b1df3764a39"
               />
          </div>
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