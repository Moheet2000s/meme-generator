import React from "react";
import { Grid } from "@mui/material";
import MemeCard from "./MemeCard";

const MemeGrid = ({ memes }) => (
  <Grid container spacing={3}>
    {memes.map((meme) => (
      <Grid item xs={12} sm={6} md={4} key={meme.id}>
        <MemeCard meme={meme} />
      </Grid>
    ))}
  </Grid>
);

export default MemeGrid;
