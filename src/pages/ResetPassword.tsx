import { useState } from 'react';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { ToastContainer, toast } from "react-toastify";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { useNavigate, useParams } from 'react-router';

const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
  };

function ResetPassword() {

const params = useParams();
const token = params.token;
  const [password, setPassword] = useState('');

  const handlePasswordChange = (e: any) => {
    setPassword(e.target.value);
  };

  const handleResetPassword = async (e: any) => {
    e.preventDefault();
    if (password === "") {
        toast.error("password is required!", {
          position: "top-center",
        });}
        else if (password.length < 6) {
            toast.error("password must be 6 char!", {
              position: "top-center",
            });
          } else {
            const data = await fetch(`http://localhost:8000/auth/reset-password/${token}`, {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  password,
                }),
              });
            
              const status = await data.status;

              if (status === 200) {
                toast.success("Password Updated.", {
                  position: "top-center",
                });
                setPassword('')
               }
                else{
                    toast.error("Expired Link to reset password", {
                        position: "top-center",
                      });

                }

              
                
          }

  };

  const navigate = useNavigate();

  const handleClick = () =>{

    navigate('/sign-in')

  }

  return (
    <Container component="main" maxWidth="xs" sx={containerStyle}>
      <CssBaseline />
      <Box>
        <Typography component="h1" variant="h5">
          Reset Password
        </Typography>
        <form noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="New Password"
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
          />
          <Button
            type="button" 
            fullWidth
            variant="contained"
            color="primary"
            onClick={handleResetPassword}
          >
            Reset Password
          </Button>
        </form>
        <Grid container justifyContent="flex-end">
          <Grid item>
            <Button
             onClick={handleClick}
              variant="text"
              color="primary"
            >
              Back to Sign In
            </Button>
          </Grid>
        </Grid>
      </Box>
    
      <ToastContainer/>
    </Container>
  );
}

export default ResetPassword;
