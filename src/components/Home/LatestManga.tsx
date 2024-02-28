import LatestMangaSingle from "./LatestMangaSingle";
import { Box } from "@mui/material";
import { Grid, Typography } from "@mui/material";
import { useEffect, useState } from 'react';
import Pagination from '@mui/material/Pagination';


const LatestManga = (props: any) => {
 

  const [mangaData, setMangaData] = useState([]);
 
  const [searchResults, setSearchResults] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
  
    async function fetchData() {
     try {
       const response = await fetch(`http://localhost:8000/manga/search-manga?category=${props.data}&title=${props.data}&page=${currentPage}`);
       const data = await response.json();
       setSearchResults(data.manga);
       setTotalPages(data.totalPages);
       console.log(searchResults)
       console.log(searchResults.length)
     } catch (error) {
       console.error("Error fetching data:", error);
     }
   }
   
   
   fetchData();
   }, [props.data, currentPage]);
   

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:8000/manga/?page=${currentPage}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
  
        if (!response.ok) {
          throw new Error(`HTTP Error! Status: ${response.status}`);
        }
  
        const data = await response.json();
        setMangaData(data.manga);
        setTotalPages(data.totalPages);
        
      } catch (error) {
        console.error("Error fetching manga data:", error);
      }
    };
  
    fetchData(); 
  }, [currentPage]);
  

  const handlePageChange = (event: any, newPage: any) => {
    setCurrentPage(newPage);
  };


  return (
    <Box component="div" sx={{ background:"var(--box-background)" }}>
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
      {(searchResults.length > 0 ? searchResults : mangaData).map(
          (item: any, index: number) => (
            <Grid item xs={6} key={index}>
              <LatestMangaSingle data={item} />
            </Grid>
          )
        )}
      </Grid>
      <Box sx={{ display: 'flex', justifyContent: 'center' , padding:"20px"}}>
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
  );
};

export default LatestManga;
