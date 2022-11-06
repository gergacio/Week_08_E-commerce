import Item from "./Item.js"//mean from current directory
import styled from 'styled-components';

const ItemList = styled.div `
display: flex;
flex-wrap: wrap;
justify-content: space-around;
`
const ItemsList = ({items, user, onBasketAdd}) => {
    //transform arr of obj into list of Components
    const itemsComponents = items.map((item, index) => {
        return <Item key={index} user={user} item={item} onBasketAdd={onBasketAdd}/>
    });
    return(
        <ItemList>
            {itemsComponents}
        </ItemList>
         
        
    );

}
export default ItemsList;