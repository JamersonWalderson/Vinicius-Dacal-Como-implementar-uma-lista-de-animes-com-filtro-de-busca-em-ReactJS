import React from "react";

const SearchInput = ({ value, onChange }) => {
  function handleChange(event) {
    onChange(event.target.value);
  }
  return (
    <div className="row d-flex justify-content-center">
      <div className="col-md-8">
        <input
          type="search"
          value={value}
          onChange={handleChange}
          className="form-control p-3 m-5"
          placeholder="Digite o nome do anime que será pesquisado"
        />
      </div>
    </div>
  );
};

export default SearchInput;
