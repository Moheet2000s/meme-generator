import axios from "axios";

const MEME_API_URL = "https://api.imgflip.com/get_memes";

export const getMemes = async () => {
  try {
    const response = await axios.get(MEME_API_URL);
    return response.data.data.memes;
  } catch (error) {
    console.error("Error fetching memes:", error);
    return [];
  }
};
