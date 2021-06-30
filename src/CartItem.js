import React from 'react';
const CartItem=(props)=> {
  
        const {price,title,qty}=props.product;
        const {
            product,
            onIncreaseQuantity,
            onDecreaseQuantity,
            onDeleteProduct
        }=props;
        return(
         <div className="cart-item">
         <div className="left-block">
           <img style={styles.image} src={product.img} />
         </div >
         <div className="right-block">
         <div>{title}</div>
         <div>Rs:{price} </div>
         <div>QTY:{qty}</div>
          <div className="cart-item-actions">
          <img 
           alt="increase"
           className="action-icons"
            src="https://img-premium.flaticon.com/png/512/1665/premium/1665629.png?token=exp=1624984448~hmac=29e3d14a2bddfbdde112b17d1f66ffe3"
            onClick={()=>onIncreaseQuantity(product)}
            />
           <img alt="decrease "
             className="action-icons"
             src="https://img-premium.flaticon.com/png/128/1665/premium/1665663.png?token=exp=1624984511~hmac=c9590390438d7e062b4c82bd0e89383a"
             onClick={()=>onDecreaseQuantity(product)}
             />
           <img 
             alt="delete"
              className="action-icons"
               src="https://img-premium.flaticon.com/png/512/1146/premium/1146159.png?token=exp=1624984334~hmac=4808fa42781fd7372b961881e3abdbf9"
               onClick={()=>onDeleteProduct(product.id)}
               />
          </div>
         </div>
          
         </div>   
        
        );
    
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