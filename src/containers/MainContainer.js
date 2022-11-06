import React, {useState} from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import storedItems from "../data/ShopItems.js";
import Header from "../components/Header.js";
import ItemsList from "../components/ItemsList";
import Basket from "../components/Basket.js";



const MainContainer = () => {
    //this component hold the state and routes as well
    //items list and user should be store outside

    const [ items, setItems ] = useState(storedItems);
    //console.log(items);
    const [ user, setUser ] = useState(
        {
            name: "G. George",
            email: "g@gmail.com",
            funds: 300,
            basket: []

        }
    );
    //always render one jsx elem 
    //pass down as prop func onBasketAdd ..we update user on bottom level and give it to the basket as props
    return(
       <Router>
        <Header user={user}/>
        <Routes>
            {/* onBasketAdd is a prop hold func which update user, always update user using func provided..so go down get user and pass it to setUser-this what we do here */}
            <Route path="/" element={<ItemsList user={user} items={items} onBasketAdd={setUser} />} />
            <Route path="/basket" element={<Basket user={user} onRemoveItem={setUser} />} />
        </Routes>
       </Router>
    );
}
export default MainContainer;