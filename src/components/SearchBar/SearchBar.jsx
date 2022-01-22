import React, { useContext, useState } from "react";
import "./SearchBar.scss";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import AppContext from "../../store/AppContext";

const SearchBar = () => {
  const [text, setText] = useState("");
  const state = useContext(AppContext);

  const handleClick = () => {
    state.addTask(text);
    setText("");
  };

  return (
    <div className="SearchBarContainer">
      <TextField
        className="SearchBarContainer__input"
        label="Nombre de la tarea"
        variant="outlined"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <Button
        className="SearchBarContainer__button"
        variant="outlined"
        disabled={!text.length}
        onClick={handleClick}
      >
        Crear
      </Button>
    </div>
  );
};

export default SearchBar;
