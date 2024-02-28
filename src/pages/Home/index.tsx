import TrendingManga from "../../components/Home/TrendingManga";
import Layout from "../../components/Layout";
import LatestManga from "../../components/Home/LatestManga";
import { Box, Grid } from "@mui/material";
import PopularManga from "../../components/Home/PopularManga";
import NewManga from "../../components/Home/NewManga";
import Categories from "../../components/Home/Categories";
import {  useLocation } from "react-router";

const Home = ({data} : any) => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const query = queryParams.get('query');

  
 
  
  return (
    <Layout>
      <TrendingManga data={data}/>
      <Grid container spacing={2}>
        <Grid item xs={8.5}>
          <LatestManga data={query}/>
        </Grid>
        <Grid item xs={3.5}>
          <Box component="div" sx={{ marginBottom: "20px" }}>
            <PopularManga  data={data}/>
          </Box>
          <Box component="div" sx={{ marginBottom: "20px" }}>
            <NewManga data={data} />
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
