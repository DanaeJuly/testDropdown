import React, { useEffect } from 'react';

// Components
import FilterInput from '../../atoms/FilterInput/FilterInput';
import InsertButton from '../../atoms/InsertButton/InsertButton';

import './CustomMenu.css'

const CustomMenu = React.forwardRef(
    ({children, onScrollToBottom}, ref) => {
        useEffect(() => onScrollToBottom(), []);
        return (
        <div 
            ref={ref}
            className={'custom-menu'}
            onScroll={(e) => {
                const element = e.target;
                const hasScrolledToBottom = (element.scrollHeight - element.clientHeight - element.scrollTop) < 0.5;
                hasScrolledToBottom && onScrollToBottom();
            }}
        >
            <FilterInput/>
            <InsertButton/>
            {children}
        </div>
    )}
)
export default CustomMenu;