import React from "react";
import {
  TextField,
  Checkbox,
  FormControlLabel,
  Button,
  Link,
  Grid,
  Typography,
  Paper,
  Box,
  FormLabel,
} from "@mui/material";
import LoginImage from "../../assets/login.png";
import Logo from "../../assets/logo.png";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate(); // Create a navigate function

  const handleLoginClick = () => {
    navigate('/properties'); // Navigate to /login
  };
  return (
    <div className="flex flex-col md:flex-row h-screen bg-white">
      {/* Left Side: Image */}
      <div
        className="w-full md:w-3/5 bg-cover bg-center"
        style={{ backgroundImage: `url(${LoginImage})` }}
      >
        {/* Replace the URL with your image */}
      </div>

      {/* Right Side: Login Form */}
      <div className="w-full md:w-2/5 flex items-center justify-center  p-4 md:p-8">
        <Paper elevation={0} className="w-full max-w-md p-8">
          <Box>
            <div className="flex items-center mb-4">
              <img
                src={Logo}
                alt="Fraction Hive Logo"
                className="h-10 w-auto mr-4"
              />
              <span className="text-xl font-bold">Fraction Hive</span>
            </div>
          </Box>
          <h1 className="font-bold text-2xl leading-7">Welcome 👋</h1>
          <h6 className="font-normal text-base leading-6 text-[#A4A6AC] mb-4">
            Please login here
          </h6>

          <FormLabel
            component="legend"
            sx={{
              mt: 2,
              mb: -2,
              color: "#0F1015",
              fontSize: "12px",
              lineHeight: "1.5",
              fontWeight: "normal",
            }}
          >
            Email Address
          </FormLabel>
          <TextField
            variant="outlined"
            fullWidth
            margin="normal"
            type="email"
            InputProps={{
              style: {
                height: "56px",
                border: "1px solid #3E54EB",
                borderRadius: "10px",
              }, // Set the height here
            }}
          />

          <FormLabel
            component="legend"
            sx={{
              mb: -2,
              color: "#0F1015",
              fontSize: "12px",
              lineHeight: "1.5",
              fontWeight: "normal",
            }}
          >
            Password
          </FormLabel>
          <TextField
            variant="outlined"
            fullWidth
            margin="normal"
            type="password"
            InputProps={{
              style: {
                height: "56px",
                border: "1px solid #3E54EB",
                borderRadius: "10px",
              }, // Set the height here
            }}
          />

          <div className="flex flex-col md:flex-row justify-between items-center mt-4">
            <FormControlLabel
              control={
                <Checkbox
                  value="remember"
                  sx={{
                    color: "#EDEDEE",

                    "&.Mui-checked": {
                      color: "#3E54EB",
                    },
                  }}
                />
              }
              label={
                <span className="font-normal text-sm leading-5">
                  Remember me
                </span>
              }
            />
            <h1 className="font-normal text-sm leading-5 text-[#3E54EB]">
              Forgot password?
            </h1>
          </div>

          <Button
            type="submit"
            fullWidth
            variant="contained"
            style={{
              backgroundColor: "#3E54EB", // Set the background color
              color: "white",
              display: "flex",
              gap: "10px",
              height: "56px",
              borderRadius: "10px",
              textTransform: "capitalize",
              // Set text color to white for better contrast
            }}
            className="mt-4 mb-2"
            onClick={handleLoginClick} 

          >
            Login
          </Button>

          {/* Forgot Password Link */}
          <Grid container>
            <Grid item xs></Grid>
          </Grid>
        </Paper>
      </div>
    </div>
  );
};

export default LoginPage;
