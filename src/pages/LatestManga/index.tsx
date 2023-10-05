import Layout from "../../components/Layout";
import LatestMangaSingle from "../../components/Home/LatestMangaSingle";
import { Box } from "@mui/material";
import { Grid, Typography } from "@mui/material";
import TrendingManga from "../../components/Home/TrendingManga";

const LatestManga = ({ data }: any) => {
  console.log(data)
  return (
    <Layout>
      <TrendingManga data={data}/>
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
          {data.map((item: any, index: number) => (
            <>
              {item.tags.includes("latest") && (
                <Grid item xs={6} key={index}>
                  <LatestMangaSingle data={item} />
                </Grid>
              )}
            </>
          ))}
        </Grid>
      </Box>
    </Layout>
  );
};

export default LatestManga;
