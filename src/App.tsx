import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import HotManga from "./pages/HotManga";
import OnlineManga from "./pages/OnlineManga";
import NewestManga from "./pages/NewestManga";
import LatestManga from "./pages/LatestManga";
import NewSignIn from "./pages/SignIn";
import { useEffect, useState } from "react";
import SignUp from "./pages/SignUp";
import PublishManga from "./pages/PublishManga";

function App() {

  const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem("usersdatatoken"));
  useEffect(() => {
    const token = localStorage.getItem("usersdatatoken");
    setIsAuthenticated(!!token);
  }, []); 

  const [mangaData, setMangaData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      console.log(isAuthenticated)
      try {
        const response = await fetch("http://localhost:8000/manga/", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
  
        if (!response.ok) {
          throw new Error(`HTTP Error! Status: ${response.status}`);
        }
  
        const data = await response.json();
        setMangaData(data);
        console.log(data)
      } catch (error) {
        console.error("Error fetching manga data:", error);
      }
    };
  
    fetchData(); 
  }, []);

  
  return (
    <Routes>
      <Route path="/" element={<Home data={mangaData} />} />
      <Route path="/hot" element={<HotManga  data={mangaData}/>} />
      {/* <Route path="/online" element={<OnlineManga />} /> */}
      <Route path="/newest" element={<NewestManga  data={mangaData}/>} />
      <Route path="/latest" element={<LatestManga   data={mangaData}/>} />
      <Route path="/sign-in" element={<NewSignIn />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/publish" Component={() => isAuthenticated ? <PublishManga /> : <NewSignIn/>} />

      {/* <Route path="/*" element={<Navigate to={"/"} />} /> */}
    </Routes>
  );
}

export default App;
