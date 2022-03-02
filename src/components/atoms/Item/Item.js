import React from 'react';
import DropdownItem from 'react-bootstrap/esm/DropdownItem';

const Item = ({key, label}) => (
    <div key={key}>
        <DropdownItem>
            {label}
        </DropdownItem>
    </div>
);

export default Item;