import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";

const Navbar = () => (
  <AppBar position="static">
    <Toolbar>
      <Typography variant="h6">Meme Generator</Typography>
    </Toolbar>
  </AppBar>
);

export default Navbar;
