import { Box, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <Box component="div" sx={{ background: "#903", p: "20px 0px" }}>
      <Grid container sx={{ maxWidth: "95%", m: "0 auto" }}>
        <Grid item xs={4}>
          <Link
            to="/privacy-policy"
            style={{ textDecoration: "none" }}
            className="colorWhite"
          >
            Privacy Policy
          </Link>
        </Grid>
        <Grid item xs={4}>
          <Link
            to="/terms-and-conditions"
            style={{ textDecoration: "none" }}
            className="colorWhite"
          >
            Terms & Conditions
          </Link>
        </Grid>
        <Grid item xs={4}>
          <Typography variant="h5" className="colorWhite">
            Contact Us
          </Typography>
          <Typography
            paragraph
            className="colorWhite"
            sx={{ marginBottom: "5px" }}
          >
            Email: mangaGods@gmail.com
          </Typography>
          <Typography
            paragraph
            className="colorWhite"
            sx={{ marginBottom: "5px" }}
          >
            Telephone: +911278798789
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
