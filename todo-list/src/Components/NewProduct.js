import React from "react";
import { ProductForm } from "./ProductForm";

export const NewProduct=(props)=>{
    const saveProductDataHandler=(enteredData)=>{
        props.onAddProduct(enteredData)
    }

    return (
        <>
            <ProductForm onSaveProductData={saveProductDataHandler}/>
        </>
    )
}