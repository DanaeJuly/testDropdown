import React from 'react';

// Libraries
import DropdownButton from 'react-bootstrap/DropdownButton';
import DropdownMenu from 'react-bootstrap/esm/DropdownMenu';

// Components
import ItemsList from '../../molecules/ItemsList/ItemsList';
import CustomMenu from '../../molecules/CustomMenu/CustomMenu';

// Hooks
import { useGetItems, searchParameter } from '../../../hooks/Services';


import './ItemsDropdown.css';

export const DropdownContext = React.createContext();


const ItemsDropdown = () => {
    const {increasePage, onFilterChange, items} = useGetItems()
    const displayData = items.map(
        item => ({key:item.código, label: item[searchParameter]})
    );
    
    return (
        <DropdownContext.Provider value = {onFilterChange}>
            <DropdownButton
                title={'Lista de empresas'}
                className={'items-dropdown'}
            >
                <DropdownMenu as={CustomMenu} onScrollToBottom={increasePage}>
                    <ItemsList items={displayData}/>
                </DropdownMenu>
            </DropdownButton>
        </DropdownContext.Provider>
    );
}

export default ItemsDropdown;