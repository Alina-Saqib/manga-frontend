import  { useState } from 'react';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import {  toast } from "react-toastify";
import { Box, Typography } from '@mui/material';

function ForgetPassword({ open, onClose }: any) {
    
    const [email, setEmail] = useState('');
  
    const handleEmailChange = async (e: any) => {
      setEmail(e.target.value);
    };
    const handleSubmit = async (e: any) => {
        e.preventDefault();
        if (email === "") {
            toast.error("email is required!", {
              position: "top-center",
            });} else if (!email.includes("@")) {
                toast.warning("includes @ in your email!", {
                  position: "top-center",
                });
              } else {
                const data = await fetch("http://localhost:8000/auth/forget-password", {
                    method: "POST",
                    headers: {
                      "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                      email,
                    }),
                  });
                
                  const status = await data.status;

                  if (status === 200) {
                    toast.success("Email is send to you For reseting Password!", {
                      position: "top-center",
                    });
                    setEmail('')
                    onClose();}
                    else{
                        toast.error("Invalid Email", {
                            position: "top-center",
                          });

                    }

                  
                    
              }
       
    
      };

  return (
    <Modal
    open={open}
    onClose={onClose}
    aria-labelledby="forget-password-modal"
    aria-describedby="enter-email-for-reset"
  >
    <Box style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 400, backgroundColor: 'white', padding: 20 }}>
    <Typography component="h1" variant="h5">Forget Password</Typography>
      <TextField
        label="Email"
        type="email"
        fullWidth
        value={email}
        onChange={handleEmailChange}
        sx={{mt:2}}
      />
      <Button  type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }} onClick={handleSubmit}>
        Submit
      </Button>
     
    </Box>
  </Modal>
  )
}

export default ForgetPassword
