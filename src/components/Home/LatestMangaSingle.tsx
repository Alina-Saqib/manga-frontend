import { Box } from "@mui/material";
import { Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { excerpt } from "../../utility";
import StarIcon from "@mui/icons-material/Star";

const LatestMangaSingle = ({ data }: any) => {
  return (
    <>
      <Grid
        container
        spacing={2}
        sx={{ marginBottom: "20px", alignItems: "center" }}
      >
        <Grid item xs={3} sx={{ position: "relative" }}>
          <Box component="img" src={`${data.imageUrl}`}></Box>
          <Box
            component="div"
            sx={{
              position: "absolute",
              display: "flex",
              alignItems: "center",
              gap: "3px",
              background: "rgba(255,255,255,0.7)",
              p: "5px",
              bottom: "10px",
              right: "0",
            }}
          >
            <span style={{ fontSize: "14px" }} className="colorMaroon">
              {data.rating}
            </span>
            <span>
              <StarIcon sx={{ fontSize: "16px" }} className="colorMaroon" />
            </span>
          </Box>
        </Grid>
        <Grid item xs={9}>
          <Typography className="latestMangaTitle">
            <Link
              to={`${data.title}`}
              style={{
                fontSize: "18px",
                fontWeight: "500",
                textDecoration: "none",
              }}
              className="colorBlack linkHover"
            >
              {excerpt(`${data.title}`, 25)}
            </Link>
          </Typography>
          <Typography
            variant="h3"
            className="latestMangaAuthor"
            sx={{
              fontSize: "14px",
              margin: "10px 0px",
              color: "rgba(0,0,0,0.5)",
            }}
          >
            {data.author}
          </Typography>
          {data.chapter
            .reverse()
            .slice(0, 3)
            .map((item: any, index: number) => (
              <Typography paragraph key={index} sx={{ margin: 0 }}>
                <Link
                  to={`/okkay/${item}`}
                  className="linkHover colorBlack"
                  style={{ textDecoration: "none" }}
                >
                  {item}
                </Link>
              </Typography>
            ))}
        </Grid>
      </Grid>
    </>
  );
};

export default LatestMangaSingle;
