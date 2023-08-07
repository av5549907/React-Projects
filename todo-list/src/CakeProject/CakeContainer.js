import { connect } from "react-redux";
import { buyCake,buyIcecream } from "./Cake/ActionCreater";
import React from "react";
const CakeContainer=(props)=>{
    return (
        <div>
            <h1>Number Of Cake: {props.numOfCake}</h1>
            <button onClick={props.buyCake}>Buy Cake</button>
            <h1>Number Of Icecream : {props.numOfIcecream}</h1>
            <button onClick={props.buyIcecream}>Buy Icecream</button>
        </div>
    );
}
const mapStateToProps=(state)=>{
    return{
  numOfCake:state.numOfCake,
  numOfIcecream:state.numOfIcecream
    }
}

const mapDispatchToProps=(dispatch)=>{
    return {
    buyCake:()=>dispatch(buyCake()),
    buyIcecream:()=>dispatch(buyIcecream())
    }
  };
export default connect(mapStateToProps,mapDispatchToProps) (CakeContainer)