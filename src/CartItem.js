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
            src="https://img-premium.flaticon.com/png/512/1665/premium/1665680.png?token=exp=1625075651~hmac=d24400a48cdc5bb5afedebadb2b795a1"
            onClick={()=>onIncreaseQuantity(product)}
            />
           <img alt="decrease "
             className="action-icons"
             src="https://image.flaticon.com/icons/png/512/1665/1665765.png"
             onClick={()=>onDecreaseQuantity(product)}
             />
           <img 
             alt="delete"
              className="action-icons"
               src="https://img-premium.flaticon.com/png/512/3368/premium/3368864.png?token=exp=1625075871~hmac=6ca81bf11c8f65b28c0152fc48a085b4"
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