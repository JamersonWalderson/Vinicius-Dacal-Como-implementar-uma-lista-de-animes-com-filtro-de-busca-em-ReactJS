import React from "react";

const SearchInput = ({value, onChange}) => {
    function handleChange(event) {
        onChange(event.target.value);
    }
    return (
        <div className="row">
            <div className="col-md-6 d-flex justify-content-center">
                <input 
                    type="search"
                    value={value}
                    onChange={handleChange}
                    className="form-control p-3 m-5"
                    placeholder="Digite o nome do anime a ser pesquisado"
                />
            </div>
        </div>
    )
};

export default SearchInput;