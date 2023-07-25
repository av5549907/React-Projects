//import { useState } from "react"
import React from 'react'
import  {ProductItem} from './ProductItem'

// export const Product=(props)=>{
//     const[text,setText]=useState(props.type)
//     const clickHandler=()=>{
//          //console.log("Button Clicked")
//          setText('Added in cart')
         
//     }
//     return(
//         <>
//         <div>
//             <h1>{props.name}</h1>
//         </div>
//         <div>
//             <h1>{props.price}</h1>
//         </div>
//         <div>
//             <h1>{text}</h1>
//         </div>
//         <div>
//             <button onClick={clickHandler}>Add to Cart</button>
//         </div>
//         </>
//     )
// }

export const Product=(props)=>{
    return (
        <div>
          {
            props.product.map((product)=>(
                   <ProductItem 
                    name={product.name}
                    type={product.type}
                    price={product.price}
                   />
            ))
        }
        </div>)
    
}

