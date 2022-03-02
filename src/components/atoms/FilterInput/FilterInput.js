import React, {useContext} from 'react';

// Libraries
import FormControl from 'react-bootstrap/FormControl';

// Components
import { DropdownContext } from '../../organisms/ItemsDropdown/ItemsDropdown';

const FilterInput = () => {
    const onFilterChange = useContext(DropdownContext);

    return (
        <FormControl
          autoFocus={true}
          className="mx-3 my-2 w-auto"
          placeholder="Filter results"
          onChange={(e) => {
            onFilterChange && onFilterChange(e.target.value)
          }}
        />
    )
}

export default FilterInput;