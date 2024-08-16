import React from "react";
import { TextField } from "@mui/material";

const MemeFilter = ({ onFilterChange }) => (
  <TextField
    fullWidth
    label="Search Memes"
    variant="outlined"
    onChange={(e) => onFilterChange(e.target.value)}
  />
);

export default MemeFilter;
