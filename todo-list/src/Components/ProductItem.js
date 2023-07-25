export const ProductItem=(props)=>{
    return(
    <div>
        <table style={{border:'1px solid black', width:'60vw', marginLeft:'20%'}}>
        <div className="product">
        <thead style={{border:'1px solid black', width:'1em',display:'flex',gridAutoFlow:'column'}}>
                <th>Name</th>
                <th>Type</th>
                <th>Price</th>
        </thead>
        <tbody>
       
        {/* <span>Name: {props.name}  </span>
        <span>Type: {props.type}  </span> 
        <span>Price: {props.price}</span> */}
        <td>{props.name}</td>
        <td>{props.type}</td>
        <td> {props.price}</td>
       
       </tbody>
       </div>
       </table>

    </div>
    

    )
}

