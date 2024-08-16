import React, { useEffect, useState } from "react";
import { Container, Box } from "@mui/material";
import Navbar from "../components/Navbar";
import MemeFilter from "../components/MemeFilter";
import MemeGrid from "../components//MemeGrid";
import { getMemes } from "../services/memeServices";

const HomePage = () => {
  const [memes, setMemes] = useState([]);
  const [filteredMemes, setFilteredMemes] = useState([]);

  useEffect(() => {
    const fetchMemes = async () => {
      const memes = await getMemes();
      setMemes(memes);
      setFilteredMemes(memes);
    };
    fetchMemes();
  }, []);

  const handleFilterChange = (filter) => {
    const filtered = memes.filter((meme) =>
      meme.name.toLowerCase().includes(filter.toLowerCase())
    );
    setFilteredMemes(filtered);
  };

  return (
    <div>
      <Navbar />
      <Container>
        <Box sx={{ mt: 4 }}>
          <MemeFilter onFilterChange={handleFilterChange} />
        </Box>
        <Box sx={{ mt: 4 }}>
          <MemeGrid memes={filteredMemes} />
        </Box>
      </Container>
    </div>
  );
};

export default HomePage;
