import Layout from "../../components/Layout";
import LatestMangaSingle from "../../components/Home/LatestMangaSingle";
import { Box, Pagination } from "@mui/material";
import { Grid, Typography } from "@mui/material";
import TrendingManga from "../../components/Home/TrendingManga";
import { useState } from "react";

const HotManga = ({ data ,totalPages, setCurrentPage}: any) => {
  const [currentPage, setCurrentPageLocal] = useState(1);

  const handlePageChange = (event: any, newPage:any) => {
    setCurrentPageLocal(newPage);
    setCurrentPage(newPage); 
  };
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
          READ MANGA ONLINE - HOT UPDATES
        </Typography>
        <Grid container spacing={2} sx={{ padding: "10px 20px" }}>
          {data.map((item: any, index: number) => (
            <>
              {item.tags.includes("hot") && (
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

export default HotManga;
