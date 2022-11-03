import React from "react";
import Item from "./Item";

const ItemList = ({items, buyButton}) => {
        const ItemsList = items.map((item, index) => {
            return (<Item buyButton={buyButton} item = {item} key={index}/>)
        })
    return (
    <>

    <ul>
        {ItemsList}
    </ul>
    
    </>
    
    )
}

export default ItemList;