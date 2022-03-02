import React from 'react';

// Components
import Item from '../../atoms/Item/Item';


const ItemsList = ({items}) => (
        <div>{items.map(Item)}</div>
    );

export default ItemsList;