import { Box, Typography, Grid } from "@mui/material";
import { Link } from "react-router-dom";
import { excerpt } from "../../utility";

const Categories = () => {
  const categories = [
    "Comedy",
    "Latest",
    "All",
    "Newest",
    "Top",
    "Adventure",
    "Fantasy",
    "Erotica",
    "Gender bender Manga",
    "Josei",
    "Medical",
    "Smut",
    "Sports",
    "Tragedy",
    "Webtoons",
    "Yuri",
  ];
  return (
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
        Categories
      </Typography>
      <Box component="div" className="homeCategoriesListMain">
        <Grid container sx={{ background: "var(--box-background)", p: "10px 15px" }}>
          {categories.sort().map((item: string) => (
            <Grid
              className="homeCategoriesListSingle"
              xs={4}
              sx={{ position: "relative" }}
            >
              <Link
                to="/"
                style={{
                  marginBottom: "10px",
                  display: "inline-block",
                  textDecoration: "none",
                }}
                className="colorMaroon homeCategoryLink"
              >
                {excerpt(item, 7)}
              </Link>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default Categories;
