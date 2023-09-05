import LatestMangaSingle from "./LatestMangaSingle";
import { Box } from "@mui/material";
import { Grid, Typography } from "@mui/material";

const LatestManga = () => {
  const mangaData: {
    id: string;
    title: string;
    chapter: Array<string>;
    imageUrl: string;
    trending: string;
    author: string;
    rating: number;
  }[] = [
    {
      id: "1",
      title: "Hanging Out With A Gamer Girl",
      chapter: ["chapter 1", "chapter 2"],
      imageUrl: "/assets/manga2.jpg",
      trending: "yes",
      author: "xyz",
      rating: 4.3,
    },
    {
      id: "2",
      title: "Hanging Out With A Gamer Girl",
      chapter: ["chapter 5", "chapter 2"],
      imageUrl: "/assets/manga3.jpg",
      trending: "yes",
      author: "xyz",
      rating: 4.3,
    },
    {
      id: "3",
      title: "Hanging Out With A Gamer Girl",
      chapter: ["chapter 8", "chapter 2"],
      imageUrl: "/assets/manga4.jpg",
      trending: "yes",
      author: "xyz",
      rating: 4.3,
    },
    {
      id: "4",
      title: "Hanging Out With A Gamer Girl",
      chapter: ["chapter 20", "chapter 2"],
      imageUrl: "/assets/manga1.png",
      trending: "yes",
      author: "xyz",
      rating: 4.3,
    },
    {
      id: "5",
      title: "Hanging Out With A Gamer Girl",
      chapter: ["chapter 10", "chapter 2"],
      imageUrl: "/assets/manga4.jpg",
      trending: "yes",
      author: "xyz",
      rating: 4.3,
    },
    {
      id: "6",
      title: "Hanging Out With A Gamer Girl",
      chapter: ["chapter 15", "chapter 2"],
      imageUrl: "/assets/manga1.png",
      trending: "yes",
      author: "xyz",
      rating: 4.3,
    },
    {
      id: "7",
      title: "Hanging Out With A Gamer Girl",
      chapter: ["chapter 16", "chapter 2"],
      imageUrl: "/assets/manga2.jpg",
      trending: "yes",
      author: "xyz",
      rating: 4.3,
    },
    {
      id: "8",
      title: "Hanging Out With A Gamer Girl",
      chapter: ["chapter 1", "chapter 2", "chapter 6", "chapter 7"],
      imageUrl: "/assets/manga3.jpg",
      trending: "yes",
      author: "xyz",
      rating: 4.3,
    },
    {
      id: "9",
      title: "Hanging Out With A Gamer Girl",
      chapter: ["chapter 19", "chapter 2"],
      imageUrl: "/assets/manga4.jpg",
      trending: "yes",
      author: "xyz",
      rating: 4.3,
    },
    {
      id: "10",
      title: "Hanging Out With A Gamer Girl",
      chapter: ["chapter 1", "chapter 2"],
      imageUrl: "/assets/manga5.jpg",
      trending: "yes",
      author: "xyz",
      rating: 4.3,
    },
  ];
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
