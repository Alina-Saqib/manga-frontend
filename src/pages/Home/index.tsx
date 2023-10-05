import TrendingManga from "../../components/Home/TrendingManga";
import Layout from "../../components/Layout";
import LatestManga from "../../components/Home/LatestManga";
import { Box, Grid } from "@mui/material";
import PopularManga from "../../components/Home/PopularManga";
import NewManga from "../../components/Home/NewManga";
import Categories from "../../components/Home/Categories";

const Home = ({data} : any) => {
  return (
    <Layout>
      <TrendingManga data={data}/>
      <Grid container spacing={2}>
        <Grid item xs={8.5}>
          <LatestManga />
        </Grid>
        <Grid item xs={3.5}>
          <Box component="div" sx={{ marginBottom: "20px" }}>
            <PopularManga />
          </Box>
          <Box component="div" sx={{ marginBottom: "20px" }}>
            <NewManga />
          </Box>
          <Box component="div" sx={{ marginBottom: "20px" }}>
            <Categories />
          </Box>
        </Grid>
      </Grid>
    </Layout>
  );
};

export default Home;
