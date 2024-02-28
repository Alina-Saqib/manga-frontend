import { Box } from "@mui/material";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = (props: any) => {
  return (
    <Box component="div" className="layoutMain">
      <Box component="div" className="layoutHeader">
        <Navbar />
      </Box>
      <Box
        component="div"
        className="layoutContent"
        sx={{ maxWidth: "90%", margin: "20px auto" }}
      >
        {props.children}
      </Box>
      <Box
        component="div"
        className="layoutFooter"
        sx={{ maxWidth: "90%", margin: "0 auto"}}
      >
        <Footer />
      </Box>
    </Box>
  );
};

export default Layout;
