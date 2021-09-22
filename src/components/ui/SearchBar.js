import React from "react";

const SearchBar = ({ onChange, onSubmit, value }) => {
  function handleSubmit(e) {
    e.preventDefault();
    onSubmit(value);
  }

  function handleChange(event) {
    onChange(event.target.value);
  }

  return (
    <form className="flex justify-center" onSubmit={handleSubmit}>
      <label>
        Enter business type:
        <input
          className="border-gray border p-1 rounded mx-4"
          type="text"
          onChange={handleChange}
          value={value}
        />
      </label>
      <button className="bg-gray-200 p-1 rounded mx-4 px-2" type="submit">
        Submit
      </button>
    </form>
  );
};

export default SearchBar;
