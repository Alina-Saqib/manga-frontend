import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import HotManga from "./pages/HotManga";
import OnlineManga from "./pages/OnlineManga";
import NewestManga from "./pages/NewestManga";
import LatestManga from "./pages/LatestManga";
import NewSignIn from "./pages/SignIn";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/hot" element={<HotManga />} />
      {/* <Route path="/online" element={<OnlineManga />} /> */}
      <Route path="/newest" element={<NewestManga />} />
      <Route path="/latest" element={<LatestManga />} />
      <Route path="/sign-in" element={<NewSignIn />} />
      {/* <Route path="/*" element={<Navigate to={"/"} />} /> */}
    </Routes>
  );
}

export default App;
