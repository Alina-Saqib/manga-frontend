import { Box } from "@mui/material";
import Navbar from "./Navbar";

const Layout = (props: any) => {
  return (
    <Box component="div" className="layoutMain">
      <Box component="div" className="layoutHeader">
        <Navbar />
      </Box>
      <Box
        component="div"
        className="layoutContent"
        sx={{ maxWidth: "90%", margin: "0 auto", marginTop: "20px" }}
      >
        {props.children}
      </Box>
    </Box>
  );
};

export default Layout;
