import { useState } from "react";
import { useForm } from "react-hook-form";

import {
  Paper,
  TextField,
  Typography,
  Box,
  InputAdornment,
  IconButton,
  FormControlLabel,
  Checkbox,
  Stack,
  Alert,
  Button,
} from "@mui/material";

import { Link, useNavigate } from "react-router-dom";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

import useNotification from "../../hooks/useNotification";

function LoginForm({ role }) {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [apiError, setApiError] = useState("");

  const { showNotification } = useNotification();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  console.log("Role =", role);

 const onSubmit = async (data) => {
  console.log("Submit Started");

  setLoading(true);
  setApiError("");

  try {
  console.log("Step 1");

  localStorage.setItem("token", "demo-token");
  console.log("Step 2");

  localStorage.setItem("role", role);
  console.log("Step 3");

  console.log(localStorage.getItem("token"));
  console.log(localStorage.getItem("role"));

  console.log("Step 4");

  navigate(`/${role}/dashboard`);
}catch (error) {
  console.error("Login Error:", error);

  setApiError("Invalid email or password");
}
};

  return (

    <Paper
      elevation={5}
      sx={{
        p: 5,
        borderRadius: 4,
      }}
    >

      <Box
        component="form"
        onSubmit={handleSubmit(onSubmit)}
      >

        {apiError && (
          <Alert
            severity="error"
            sx={{ mb: 2 }}
          >
            {apiError}
          </Alert>
        )}

        <TextField
          fullWidth
          label="Email Address"
          margin="normal"

          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^\S+@\S+\.\S+$/,
              message: "Enter a valid email address",
            },
          })}

          error={!!errors.email}
          helperText={errors.email?.message}
        />

        <TextField
          fullWidth
          label="Password"
          margin="normal"

          type={
            showPassword
              ? "text"
              : "password"
          }

          {...register("password", {
            required: "Password is required",
            minLength: {
              value: 6,
              message: "Minimum 6 characters",
            },
          })}

          error={!!errors.password}
          helperText={errors.password?.message}

          slotProps={{
            input: {
              endAdornment: (
                <InputAdornment position="end">

                  <IconButton
                    onClick={() =>
                      setShowPassword(!showPassword)
                    }
                  >
                    {showPassword
                      ? <VisibilityOff />
                      : <Visibility />}
                  </IconButton>

                </InputAdornment>
              ),
            },
          }}
        />

        <Stack
          direction="row"
          sx={{
            justifyContent: "space-between",
            alignItems: "center",
            mt: 2,
          }}
        >

          <FormControlLabel
            control={<Checkbox />}
            label="Remember Me"
          />

          <Link to="/auth/forgot-password">
            Forgot Password?
          </Link>

        </Stack>

        <Button
          fullWidth
          variant="contained"
          size="large"
          type="submit"
          disabled={loading}
          sx={{
            mt: 4,
            borderRadius: 3,
            py: 1.5,
          }}
        >
          {loading
            ? "Logging in..."
            : "LOGIN"}
        </Button>

        <Typography
          sx={{
            textAlign: "center",
            mt: 3,
          }}
        >
          Don't have an account?{" "}

          <Link to={`/auth/register/${role}`}>
            Register
          </Link>

        </Typography>

      </Box>

    </Paper>

  );
}

export default LoginForm;