import React, { useState } from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Container } from "@mui/material";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {  useNavigate } from "react-router";

const NewSignIn = () => {
  const [passShow, setPassShow] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const [inpval, setInpval] = useState({
    email: "",
    password: "",
  });
  // Function to handle the "Remember me" checkbox change
  const handleRememberMeChange = (event: any) => {
    setRememberMe(event.target.checked);
  };

  const Navigate = useNavigate();

  //   const history = useHistory();

  const setVal = (e: any) => {
    // console.log(e.target.value);
    const { name, value } = e.target;

    setInpval(() => {
      return {
        ...inpval,
        [name]: value,
      };
    });
  };

  const handleSignIn = async (e: any) => {
    e.preventDefault();

    const { email, password } = inpval;

    if (email === "") {
      toast.error("email is required!", {
        position: "top-center",
      });
    } else if (!email.includes("@")) {
      toast.warning("includes @ in your email!", {
        position: "top-center",
      });
    } else if (password === "") {
      toast.error("password is required!", {
        position: "top-center",
      });
    } else if (password.length < 6) {
      toast.error("password must be 6 char!", {
        position: "top-center",
      });
    } else {
      // console.log("user login succesfully done");
      if (rememberMe) {
        // Save the username and password to some storage mechanism (e.g., localStorage)
        localStorage.setItem("email", email);
        localStorage.setItem("password", password);
      }

      const data = await fetch("http://localhost:8000/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      const res = await data.json();
      const status = await data.status;
      console.log(res.token);
       // Access the status from the response body

    

      if (status === 200) {
        toast.error("Successfully Login!", {
          position: "top-center",
        });
        localStorage.setItem("usersdatatoken", res.token);
        // history.push("/Home");
        setInpval({ ...inpval, email: "", password: "" });
        Navigate('/');
      }
      else if(status === 401 ){
        toast.error("Invalid Email!", {
          position: "top-center",
        });
        }
        else if(status === 402 ){
          toast.error("Invalid Password!", {
            position: "top-center",
          });
          }
        else {
          toast.error("Login Failed!", {
            position: "top-center",
          });

        }

    }
  };
  return (
    <>
      <Container component="main" maxWidth="xl">
        <Box
          sx={{
            marginTop: 8,
          }}
        >
          <Grid container>
            <CssBaseline />
            <Grid
              item
              xs={false}
              sm={4}
              md={7}
              sx={{
                backgroundImage: "url(https://source.unsplash.com/random)",
                backgroundRepeat: "no-repeat",
                backgroundColor: (t) =>
                  t.palette.mode === "light"
                    ? t.palette.grey[50]
                    : t.palette.grey[900],
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
            <Grid
              item
              xs={12}
              sm={8}
              md={5}
              component={Paper}
              elevation={6}
              square
            >
              <Box
                sx={{
                  my: 8,
                  mx: 4,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Typography component="h1" variant="h5">
                  Sign in
                </Typography>
                <Box
                  component="form"
                  noValidate
                  onSubmit={handleSignIn}
                  sx={{ mt: 1 }}
                >
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    autoFocus
                    value={inpval.email}
                    onChange={setVal}
                  />
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    value={inpval.password}
                    onChange={setVal}
                    id="password"
                    autoComplete="current-password"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        value="remember"
                        color="primary"
                        checked={rememberMe}
                        onChange={handleRememberMeChange}
                      />
                    }
                    label="Remember me"
                  />
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                  >
                    Sign In
                  </Button>
                  <Grid container>
                    <Grid item xs>
                      <Link href="#" variant="body2">
                        Forgot password?
                      </Link>
                    </Grid>
                    <Grid item>
                      <Link href="#" variant="body2">
                        {"Don't have an account? Sign Up"}
                      </Link>
                    </Grid>
                  </Grid>
                </Box>
              </Box>
            </Grid>
          </Grid>
          <ToastContainer />
        </Box>
      </Container>
    </>
  );
};

export default NewSignIn;
