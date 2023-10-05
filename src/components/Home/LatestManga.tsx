import LatestMangaSingle from "./LatestMangaSingle";
import { Box } from "@mui/material";
import { Grid, Typography } from "@mui/material";
import { useEffect, useState } from 'react';

const LatestManga = () => {

  const [mangaData, setMangaData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:8000/manga/", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
  
        if (!response.ok) {
          throw new Error(`HTTP Error! Status: ${response.status}`);
        }
  
        const data = await response.json();
        setMangaData(data);
        
      } catch (error) {
        console.error("Error fetching manga data:", error);
      }
    };
  
    fetchData(); 
  }, []);
  


  return (
    <Box component="div" sx={{ background: "white" }}>
      <Typography
        variant="h6"
        className="colorMaroon"
        sx={{
          fontSize: "20px",
          padding: "10px 20px",
          marginBottom: "20px",
          borderBottom: "1px solid #903",
        }}
      >
        READ MANGA ONLINE - LATEST UPDATES
      </Typography>
      <Grid container spacing={2} sx={{ padding: "10px 20px" }}>
        {mangaData.map((item: any, index: number) => (
          <Grid item xs={6} key={index}>
            <LatestMangaSingle data={item} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default LatestManga;
