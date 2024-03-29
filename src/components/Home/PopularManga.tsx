import { mangaData } from "../../data/data.json";
import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { excerpt } from "../../utility";

const PopularManga = ({data}: any) => {
  console.log(data)
  const popularTag: any = [];

  mangaData.forEach((item: any) => {
    if (item.tags.includes("popular")) {
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
        <Box
          component="div"
          className="homePopularLinkMain"
          sx={{ background:  "var(--box-background)", p: "10px 15px" }}
        >
          {data.slice(0,10).map((item: any) => (
           <>
            {item.tags.includes("hot")  && (<Link
              to="/"
              style={{
                display: "block",
                textDecoration: "none",
                marginBottom: "10px",
              }}
              className="colorMaroon mostPopularLink"
            >
              {excerpt(item.title, 40)}
            </Link>)}
            </>
          ))}
        </Box>
      </Box>
    </>
  );
};

export default PopularManga;
