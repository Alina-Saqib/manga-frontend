import { mangaData } from "../../data/data.json";
import { Box, Typography, Grid } from "@mui/material";
import { Link } from "react-router-dom";

const NewManga = ({data}: any) => {
 
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
          New Manga
        </Typography>
        <Grid
          container
          className="homePopularLinkMain"
          sx={{ background: "var(--box-background)", width: "100%", margin: "0" }}
          spacing={1}
        >
          {data.slice(0,6).map((item: any) => (
            <>
            {  item.tags.includes("new")  && (<Grid item xs={3}>
              <Link
                to="/"
                style={{
                  textDecoration: "none",
                }}
                className="colorMaroon homeNewLink"
              >
                <img src={`http://fictionteller.se/${item.thumbnail}`} alt={`${item.title}`} />
              </Link>
            </Grid>)}
            </>
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default NewManga;
