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
} from "@mui/material";

import { Link } from "react-router-dom";

import { LoadingButton } from "@mui/lab";

import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

function LoginForm({ role }) {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [apiError, setApiError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setLoading(true);
    setApiError("");

    try {
      console.log(data);

      // -------------------------
      // Later connect FastAPI
      // await loginAPI(data);
      // -------------------------

    } catch (error) {
      setApiError("Invalid email or password");
    } finally {
      setLoading(false);
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
          <Alert severity="error" sx={{ mb: 2 }}>
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
          type={showPassword ? "text" : "password"}
          {...register("password", {
            required: "Password is required",
            minLength: {
              value: 6,
              message: "Minimum 6 characters",
            },
          })}
          error={!!errors.password}
          helperText={errors.password?.message}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  onClick={() =>
                    setShowPassword(!showPassword)
                  }
                >
                  {showPassword ? (
                    <VisibilityOff />
                  ) : (
                    <Visibility />
                  )}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />

        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          mt={2}
        >
          <FormControlLabel
            control={<Checkbox />}
            label="Remember Me"
          />

          <Link to="/auth/forgot-password">
            Forgot Password?
          </Link>
        </Stack>

        <LoadingButton
          fullWidth
          loading={loading}
          variant="contained"
          size="large"
          type="submit"
          sx={{
            mt: 4,
            borderRadius: 3,
            py: 1.5,
          }}
        >
          Login
        </LoadingButton>

        <Typography
          align="center"
          mt={3}
        >
          Don't have an account?

          <Link to="/auth/register">
            Register
          </Link>
        </Typography>

      </Box>
    </Paper>
  );
}

export default LoginForm;