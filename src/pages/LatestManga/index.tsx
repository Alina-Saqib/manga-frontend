import Layout from "../../components/Layout";
import LatestMangaSingle from "../../components/Home/LatestMangaSingle";
import { Box, Pagination } from "@mui/material";
import { Grid, Typography } from "@mui/material";
import TrendingManga from "../../components/Home/TrendingManga";
import { useParams } from "react-router";
import { useState } from "react";

const LatestManga = ({ data ,totalPages, setCurrentPage}: any) => {
  const [currentPage, setCurrentPageLocal] = useState(1);

  const handlePageChange = (event: any, newPage:any) => {
    setCurrentPageLocal(newPage);
    setCurrentPage(newPage); 
  };

  const { query } = useParams();

  const filteredData = query
  ? data.filter((item: any) => item.title.toLowerCase().includes(query.toLowerCase()))
  : data;

  return (
    <Layout>
      <TrendingManga data={data}/>
      <Box component="div" sx={{ background: "var(--box-background)" }}>
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
        <Box sx={{ display: 'flex', justifyContent: 'center', padding: '20px' }}>
        <Pagination
          count={totalPages}
          page={currentPage}
          onChange={handlePageChange}
          sx={{
            '& .MuiPaginationItem-page.Mui-selected': {
              backgroundColor: '#903',
              color:"white"
            },
          }}
        />
      </Box>
      </Box>
    </Layout>
  );
};

export default LatestManga;
