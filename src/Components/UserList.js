import React from “react”;
const ItemList = ({items}) => {
        const ItemsList = items.map((item) => {
            return <li>{item.name}</li>
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