import { Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import HotManga from "./pages/HotManga";
import NewestManga from "./pages/NewestManga";
import LatestManga from "./pages/LatestManga";
import NewSignIn from "./pages/SignIn";
import { useEffect, useState } from "react";
import SignUp from "./pages/SignUp";
import PublishManga from "./pages/PublishManga";
import SlideShowView from "./components/SlideShowView";
import ResetPassword from "./pages/ResetPassword";


function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem("usersdatatoken"));
  useEffect(() => {
    const token = localStorage.getItem("usersdatatoken");
    setIsAuthenticated(!!token);
  }, [isAuthenticated]); 

  const [mangaData, setMangaData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      console.log(isAuthenticated)
      try {
        const response = await fetch("http://localhost:8000/manga/?page=${currentPage}", {
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
        console.log(data)
      } catch (error) {
        console.error("Error fetching manga data:", error);
      }
    };
  
    fetchData(); 
  }, [currentPage]);


  
  return (
 
    <Routes>
      <Route path="/" element={<Home data={mangaData} />} />
      <Route path="/hot" element={<HotManga  data={mangaData} totalPages={totalPages} setCurrentPage={setCurrentPage} />} />
      {/* <Route path="/online" element={<OnlineManga />} /> */}
      <Route path="/newest" element={<NewestManga  data={mangaData} totalPages={totalPages} setCurrentPage={setCurrentPage}/>} />
      <Route path="/slideshow/:pdfUrls" element={<SlideShowView />}/>
      <Route path="/latest" element={<LatestManga   data={mangaData} totalPages={totalPages} setCurrentPage={setCurrentPage}/>} />
      <Route path="/sign-in" element={<NewSignIn />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/publish" Component={() => isAuthenticated ? <PublishManga /> : <NewSignIn/>} />
       <Route path="/reset-password/:token" element={<ResetPassword/>} />

      {/* <Route path="/*" element={<Navigate to={"/"} />} /> */}
    </Routes>
   
  );
}

export default App;
