import { mangaData } from "../../data/data.json";
import { Box, Typography, Grid } from "@mui/material";
import { Link } from "react-router-dom";

const NewManga = () => {
  const popularTag: any = [];

  mangaData.forEach((item: any) => {
    if (item.tags.includes("new")) {
      popularTag.push(item);
    }
  });
  return (
    <>
      <Box component="div">
        <Typography
          variant="h5"
          sx={{
            background: "#903",
            color: "white",
            p: "10px 15px",
            m: "0",
          }}
        >
          Most Popular
        </Typography>
        <Grid
          container
          className="homePopularLinkMain"
          sx={{ background: "white", width: "100%", margin: "0" }}
          spacing={1}
        >
          {popularTag.map((item: any) => (
            <Grid item xs={3}>
              <Link
                to="/"
                style={{
                  textDecoration: "none",
                }}
                className="colorMaroon homeNewLink"
              >
                <img src={`${item.imageUrl}`} alt={`${item.title}`} />
              </Link>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default NewManga;
