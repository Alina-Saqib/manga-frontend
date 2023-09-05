import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import HotManga from "./pages/HotManga";
import OnlineManga from "./pages/OnlineManga";
import NewestManga from "./pages/NewestManga";
import LatestManga from "./pages/LatestManga";
import { ThemeProvider, CssBaseline } from "@mui/material";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hot" element={<HotManga />} />
        <Route path="/online" element={<OnlineManga />} />
        <Route path="/newest" element={<NewestManga />} />
        <Route path="/latest" element={<LatestManga />} />
        {/* <Route path="/*" element={<Navigate to={"/"} />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
