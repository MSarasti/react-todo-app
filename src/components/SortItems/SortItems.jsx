import React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import "./SortItems.scss";

const SortItems = () => {
  return (
    <Box my="2%" width="100%" display="flex" justifyContent="flex-end">
      <FormControl className="sortItemsForm">
        <InputLabel id="sortSelectLabel">Ordenar</InputLabel>
        <Select
          labelId="sortSelectLabel"
          id="sortSelect"
          value={"asc"}
          label="Ordenar"
          onChange={(e) => console.log(e.target.value)}
        >
          <MenuItem value={"asc"}>Ascendente</MenuItem>
          <MenuItem value={"desc"}>Descentente</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default SortItems;
