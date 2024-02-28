import { useState } from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Container } from "@mui/material";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {  useNavigate } from "react-router";

const SignUp = () => {


  const [inpval, setInpval] = useState({
    name:"",
    display_name:"",
    email: "",
    password: "",
  });

  const Navigate = useNavigate();


  const setVal = (e: any) => {
 
    const { name, value } = e.target;

    setInpval(() => {
      return {
        ...inpval,
        [name]: value,
      };
    });
  };

  const handleSignUp = async (e: any) => {
    e.preventDefault();

    const { name, display_name, email, password } = inpval;
    if(name === ""){
        toast.error("Full Name is required!", {
            position: "top-center",
          });
    }
    if(display_name === ""){
        toast.error("Display Name is required!", {
            position: "top-center",
          });
    }

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
      
      const data = await fetch("http://localhost:8000/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          display_name,
          email,
          password,
        }),
      });

      const res = await data.json();
      const status = await data.status;
      console.log(status)
    
       // Access the status from the response body
  if (status === 200) {
        toast.success("Registered Successfully!", {
          position: "top-center",
        });
        setInpval({ ...inpval, name:"", display_name:"", email: "", password: "" });
        Navigate('/sign-in');
      }
      else if(status === 400 ){
        toast.error("Email or Display Name already exists", {
          position: "top-center",
        });
        }
        else {
          toast.error("SignUp Failed!", {
            position: "top-center",
          });

        }

    }
  };
  return (
    <>
      <Container component="main" maxWidth="lg">
        <Box
          sx={{
            marginTop: 2,
      
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
                  Register
                </Typography>
                <Box
                  component="form"
                  noValidate
                  onSubmit={handleSignUp}
                  sx={{ mt: 1 }}
                >
                    <TextField
                    margin="normal"
                    size="medium"
                    required
                    fullWidth
                    id="name"
                    label="Full Name"
                    name="name"
                    autoComplete="name"
                    autoFocus
                    value={inpval.name}
                    onChange={setVal}
                  />
                     <TextField
                    margin="normal"
                    size="medium"
                    required
                    fullWidth
                    id="display_name"
                    label="Display Name"
                    name="display_name"
                    autoComplete="display_name"
                    autoFocus
                    value={inpval.display_name}
                    onChange={setVal}
                  />
                  <TextField
                    margin="normal"
                    size="medium"
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
                    size="medium"
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
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                  >
                    Sign Up
                  </Button>
                  <Grid container sx={{justifyContent:"center"}}>
                    <Grid item >
                      <Link href="/sign-in" variant="body2">
                        {"Already a User? Sign In"}
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

export default SignUp;
