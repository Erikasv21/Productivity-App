import React from "react";
import TextField from "@mui/material/TextField";
import "../styles/search.css";

const Search = ({ text, handleChange, addItem }) => {
  return (
    <>
      <div className="search-container">
        <form onSubmit={addItem} className="search-form">
          <TextField
            id="filled-basic"
            label="Enter your task!"
            variant="filled"
            color="warning"
            autoComplete="off"
            value={text}
            onChange={handleChange}
            className="input-search"
          />
          <p>Press ENTER to submit!</p>
        </form>
      </div>
    </>
  );
};

export default Search;
