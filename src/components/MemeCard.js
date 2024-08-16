import React from "react";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";

const MemeCard = ({ meme }) => (
  <Card>
    <CardMedia component="img" height="140" image={meme.url} alt={meme.name} />
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
        {meme.name}
      </Typography>
    </CardContent>
  </Card>
);

export default MemeCard;
