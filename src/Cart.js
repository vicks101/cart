import React from 'react';
import CartItem from './CartItem'
const Cart=(props)=> {
   
        const {products} = props;
         return(
             
             <div className="cart">
                {
                    products.map((product)=>{
                    return <CartItem 
                        product={product}
                        key={product.id}
                        onIncreaseQuantity={props.onIncreaseQuantity}
                        onDecreaseQuantity={props.onDecreaseQuantity}
                        onDeleteProduct={props.onDeleteProduct} 
                     />
                        
                    })
                }
                 {products.length===0 &&
                     <h2>
                        Cart is Empty !! 
                     </h2>
                 }
            </div>
         );
     
    }
    


export default Cart;