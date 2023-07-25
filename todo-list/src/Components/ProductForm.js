import React,{useState} from 'react'
import './table.css'

export const ProductForm=(props)=>{
   const[name,setName]=useState('')
   const[type,setType]=useState('')
   const[price,setPrice]=useState('')
   
    const changeName=(event)=>{
       setName(event.target.value)
       //console.log({name})
    }
    const changeType=(event)=>{
        setType(event.target.value)    
        //console.log({price}) 
     }
    const changePrice=(event)=>{
        setPrice(event.target.value)  
        //console.log({price})   
     }

    const submitHandler=(event)=>{
        event.preventDefault()
        const productData={
          name:name,
          type:type,
          price:price
        }
        console.log(productData)
        props.onSaveProductdata(productData)
        setName('')
        setType('')
        setPrice('')
    }

    return (
        
        <div className='formcontainer'>
          <form onSubmit={submitHandler}>
            <div className='formcontainer-input'>
                <label style={{textAlign:"left"}}>Name</label><br/>
                <input type="text" onChange={changeName} value={name}/><br/>
            </div>
            <div className='formcontainer-input'>
                <label style={{textAlign:"left"}}>Type</label><br/>
                <input type="text" onChange={changeType} value={type}/><br/>
            </div>
            <div className='formcontainer-input'>
                <label style={{textAlign:"left"}}>Price</label><br/>
                <input type="text" onChange={changePrice} value={price}/><br/>
            </div>
            <div className='btn'>
                <button type='submit' >Submit</button>
            </div>
            </form>
        </div>

    )

    
}

