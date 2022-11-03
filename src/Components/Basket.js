import React from "react";

const Basket = ({basket}) => {
    //turn arr of obj into arr of jsx elements ..do with component later one
    const basketlist = basket.map((obj, index) => {
        return <li key={index}>{obj.name}</li>
    });
    
    
    return (
    <>
        <ul>{basketlist}</ul>


    </>)
}

export default Basket;