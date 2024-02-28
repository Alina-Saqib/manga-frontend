import { Box } from "@mui/material";
import { Button, Switch } from "@mui/material";
import { styled, alpha } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import { Link, useNavigate } from "react-router-dom";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from '@mui/icons-material/LightMode';
import { useEffect, useState } from "react";
import { useDarkMode } from '../context/DarkModeContext';

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  boxShadow: "1px 1px 3px rgba(0,0,0,0.5)",
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
  "& .MuiInputBase-input:focus": {
    borderBottom: "1px solid rgba(0,0,0,0.3)",
  },
}));

const switchLabel = { inputProps: { "aria-label": "Switch demo" } };

const menuItems: { name: string; path: string }[] = [
  { name: "Manga Online", path: "" },
  { name: "Latest Manga", path: "latest" },
  { name: "Hot Manga", path: "hot" },
  { name: "Newest Manga", path: "newest" },
];

const Navbar = () => {


  const { darkMode, toggleDarkMode } = useDarkMode();


 
  const updateDarkModeStyles = (theme: string) => {
    const themes : Record<string, string> = {
      light: "#f5f5f5",
      dark: "#333333",
    };
    const BoxTheme:  Record<string, string> = {
      light: "white",
      dark: "gray",
    };


    localStorage.setItem("theme", theme);

    
    document.documentElement.style.setProperty("--body-background", themes[theme] || themes.light);
    document.documentElement.style.setProperty("--box-background", BoxTheme[theme] || BoxTheme.light);
  };


  useEffect(() => {
    updateDarkModeStyles(darkMode);
  }, [darkMode]);


  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");

  

  
  
  const handleSearch = (e: any) => {
    const query = e.target.value;
    setSearchQuery(query);
    navigate(`/?query=${query}`);
  };



  useEffect(() => {
    const userToken = localStorage.getItem("usersdatatoken");
    if (userToken) {
    
      setIsLoggedIn(true);
    } else {

      setIsLoggedIn(false);
    }
  }, [isLoggedIn]);

 

  const handleLogout = () => {
  
    localStorage.removeItem("usersdatatoken");
    setIsLoggedIn(false);
    navigate('/')
    window.location.reload();
   
  };
  const handleSignInClick = () => {
    navigate("/sign-in");
  };

  const handlePublishClick =() =>{
    navigate("/publish")
  }

  const modeIcon = darkMode === 'dark' ? <LightModeIcon/> : <DarkModeIcon/>;
  return (
    <>
      <Box
        component="div"
        className="navbarMainFlex"
        sx={{
          display: "flex",
          justifyContent: "space-between",
          maxWidth: "90%",
          margin: " 0 auto",
          alignItems: "center",
        }}
      >
        <Box
          component="div"
          className="navbarMainLeft"
          sx={{ width: "19%",background: "var(--box-background)", padding: "40px 40px" }}
        >
          <Link to="/">
            <Box
              component="img"
              className="navbarLogo"
              src="/assets/logo.png"
            ></Box>
          </Link>
        </Box>
        <Box component="div" className="navbarMainRight" sx={{ width: "80%" }}>
          <Box
            component="div"
            className="navbarSearchBar"
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "20px 0px",
              background: "var(--box-background)",
            }}
          >
            <Box
              component="div"
              className="searchBarAndBtn"
              sx={{ display: "flex", alignItems: "center", gap: "20px" }}
            >
              <Box component="div" className="searchBar">
                <Search>
                  <SearchIconWrapper>
                    <SearchIcon />
                  </SearchIconWrapper>
                  <StyledInputBase
                    placeholder="Search…"
                    inputProps={{ "aria-label": "search" }}
                    value={searchQuery}
                    onChange={handleSearch}
                  />
                </Search>
              </Box>
              <Box component="div" className="authBtn">
                {isLoggedIn ?    <Button
                  variant="contained"
                  sx={{
                    marginRight: "10px",
                    background: "#000",
                  }}
                  onClick={handleLogout}
                >
                  Logout
                </Button>:  <Button
                  variant="contained"
                  sx={{
                    marginRight: "10px",
                    background: "#000",
                  }}
                  onClick={handleSignInClick}
                >
                  Login
                </Button>
                }
                <Button variant="contained" sx={{ background: "#000000" }}
                onClick={handlePublishClick}>
                 Publish
                </Button> 
                </Box>
             
            </Box>
            <Box
              component="div"
              className="darkModeToggler"
              sx={{ display: "flex", alignItems: "center", gap: "10px" }}
            >
              {modeIcon}
              <Switch {...switchLabel} 
              checked={darkMode === 'dark'}
              onChange={toggleDarkMode}/>
            </Box>
          </Box>
          <Box component="div" className="navbarMenuBar">
            <Box
              component="div"
              className="menuMain"
              sx={{ background: "#903", padding: "25px 10px" }}
            >
              <ul className="menuList">
                {menuItems.map((item: any, index: number) => (
                  <li key={index} style={{ display: "inline-block" }}>
                    <Link
                      to={`/${item.path}`}
                      style={{
                        textDecoration: "none",
                        color: "white",
                        marginRight: "10px",
                      }}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Navbar;
