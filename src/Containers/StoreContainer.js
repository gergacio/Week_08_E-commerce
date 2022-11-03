import {React, useEffect, useState} from "react";
import ItemList from "../Components/ItemList";
import Basket from "../Components/Basket";



const StoreContainer = () => {

    

    const [user, setUser] = useState({name: "Jess"})

    const [items, setItems] = useState([
        {id: 0, name: "cheese", price: 2.50}, 
        {id: 1, name: "tomatoes", price: 1.00}, 
        {id: 2, name: "pickle", price: 1.60}, 
        {id: 3, name: "bread", price: 3.00}, 
        {id: 4, name: "sea food sticks", price: 1.00}])

    const [basket, setBasket] = useState([]);

    console.log("basket", basket);
   
 
    
    const buyButton = (id) => {
        const chosenItem = items.find(item => item.id === id);
        //console.log("chosenItem:",chosenItem.id);
        //Never change state ..always change copy...give copy to hook provided to update state with new one
        const copy = [...basket];
        copy.push(chosenItem);

        setBasket(copy);
       
    }
 

    return (
        <>
            <h3>This is the container</h3>
            <ItemList items = {items} buyButton = {buyButton}/> 
            <Basket basket = {basket} /> 
        </>
    )
};

export default StoreContainer;