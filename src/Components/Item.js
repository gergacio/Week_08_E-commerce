import React from "react";
import Button from "./Button";

const Item = ({item,buyButton}) => {

    function clickHandler () {
        const id = item.id;
        //console.log("item id:",id);
        buyButton(id);
    }
    return (
        <>
        <p>{item.name}</p>
        <button onClick={clickHandler}>Add</button>
        </>
    )
}

export default Item