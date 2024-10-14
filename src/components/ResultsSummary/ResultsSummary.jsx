import React from "react";
import {
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  IconButton,
  styled,
} from "@mui/material";
import { GridView } from "@mui/icons-material";
import ListIcon from "@mui/icons-material/List";
const StyledSelect = styled(Select)`
  && {
    border: none !important; /* Remove the border */
    box-shadow: none !important; /* Remove the shadow */
    background-color: transparent; /* Optional: Make background transparent */
    padding: 8px; /* Optional: Adjust padding */
  }

  &&:focus {
    border: none !important; /* Remove border on focus */
    box-shadow: none !important; /* Remove box-shadow on focus */
  }

  /* For the outlined variant */
  & .MuiOutlinedInput-notchedOutline {
    border: none !important; /* Remove the outline border */
  }
`;
const ResultsSummary = ({ totalResults }) => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center mb-4 sm:flex-row justify-between items-center ">
      <div className="flex items-center space-x-2 mb-2 md:mb-0">
        <IconButton>
          <GridView />
        </IconButton>
        <IconButton>
          <ListIcon />
        </IconButton>
        <span>Showing 1–16 of {totalResults} results</span>
      </div>

      <div className="flex items-center">
        <InputLabel id="sort-select-label">Sort by Price</InputLabel>
        <StyledSelect
          labelId="sort-select-label"
          id="sort-select"
          value="Low to High"
        >
          <MenuItem value="Low to High">Low to High</MenuItem>
          <MenuItem value="High to Low">High to Low</MenuItem>
        </StyledSelect>
      </div>
    </div>
  );
};


export default ResultsSummary;
