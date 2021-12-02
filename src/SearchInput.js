import React, { useState } from "react";
import useDebounce from "./useDebounce";

const SearchInput = ({ value, onChange }) => {
  const [displayValue, setDisplayValue] = useState(value);
  const debouncedChange = useDebounce(onChange, 500);

  function handleChange(event) {
    setDisplayValue(event.target.value);
    debouncedChange(event.target.value);
    // onChange(event.target.value);
  }
  return (
    <div className="row d-flex justify-content-center">
      <div className="col-md-8">
        <input
          type="search"
          value={displayValue}
          onChange={handleChange}
          className="form-control p-3 m-5"
          placeholder="Digite o nome do anime que será pesquisado"
        />
      </div>
    </div>
  );
};

export default SearchInput;
