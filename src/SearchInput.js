import React from "react";

const SearchInput = ({value, onChange}) => {
    return (
        <input type="search" value={value} onChange={onChange} />
    )
};

export default SearchInput;