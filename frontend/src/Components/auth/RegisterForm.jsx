import { useState } from "react";
import { useForm } from "react-hook-form";

import { LoadingButton } from "@mui/lab";

import {
  Paper,
  TextField,
  Stack,
  Typography,
  Checkbox,
  FormControlLabel,
  Alert,
  InputAdornment,
  IconButton,
} from "@mui/material";

import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

import ImageUpload from "./ImageUpload";


function RegisterForm({ role = "citizen" }) {

  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [apiError, setApiError] = useState("");


  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();


  const password = watch("password");


  const onSubmit = async (data) => {

    setLoading(true);
    setApiError("");

    const userData = {
      ...data,
      role,
    };


    try {

      console.log("Register Data:", userData);


      // Later FastAPI API
      // await registerAPI(userData);


    } catch (error) {

      setApiError("Registration failed. Try again.");

    } finally {

      setLoading(false);

    }

  };


  return (

    <Paper
      elevation={5}
      sx={{
        p:5,
        borderRadius:4,
      }}
    >

      <form onSubmit={handleSubmit(onSubmit)}>


        <Stack spacing={3}>


          <Typography
            variant="h5"
            textAlign="center"
            fontWeight="bold"
            color="primary"
          >
            Register as {role}
          </Typography>



          {
            apiError &&

            <Alert severity="error">
              {apiError}
            </Alert>

          }



          <ImageUpload />



          <TextField
            label="Full Name"
            fullWidth

            {...register("name",{
              required:"Full Name is required"
            })}

            error={!!errors.name}
            helperText={errors.name?.message}
          />



          <TextField
            label="Email"
            fullWidth

            {...register("email",{
              required:"Email is required",

              pattern:{
                value:/^\S+@\S+\.\S+$/,
                message:"Enter valid email"
              }

            })}

            error={!!errors.email}
            helperText={errors.email?.message}

          />



          <TextField
            label="Mobile Number"
            fullWidth

            {...register("mobile",{

              required:"Mobile number is required",

              pattern:{
                value:/^[0-9]{10}$/,
                message:"Enter 10 digit mobile number"
              }

            })}

            error={!!errors.mobile}
            helperText={errors.mobile?.message}

          />



          <TextField
            label="Address"
            multiline
            rows={3}
            fullWidth

            {...register("address",{
              required:"Address is required"
            })}

            error={!!errors.address}
            helperText={errors.address?.message}

          />



          <TextField
            label="City"
            fullWidth

            {...register("city",{
              required:"City is required"
            })}

            error={!!errors.city}
            helperText={errors.city?.message}

          />



          <TextField

            label="Password"

            type={
              showPassword
              ? "text"
              : "password"
            }

            fullWidth


            {...register("password",{

              required:"Password required",

              minLength:{
                value:6,
                message:"Minimum 6 characters"
              }

            })}


            error={!!errors.password}

            helperText={errors.password?.message}



            InputProps={{

              endAdornment:(

                <InputAdornment position="end">

                  <IconButton

                    onClick={() =>
                      setShowPassword(!showPassword)
                    }

                  >

                    {
                      showPassword
                      ?
                      <VisibilityOff/>
                      :
                      <Visibility/>
                    }


                  </IconButton>


                </InputAdornment>

              )

            }}

          />



          <TextField

            label="Confirm Password"

            type={
              showPassword
              ? "text"
              : "password"
            }


            fullWidth


            {...register("confirmPassword",{

              required:"Confirm password",

              validate:(value)=>
                value===password ||
                "Passwords do not match"

            })}



            error={!!errors.confirmPassword}

            helperText={
              errors.confirmPassword?.message
            }

          />



          <FormControlLabel

            control={

              <Checkbox

                {...register("terms",{

                  required:"Accept Terms"

                })}

              />

            }

            label="I agree to Terms & Conditions"

          />



          {
            errors.terms &&

            <Alert severity="error">

              {errors.terms.message}

            </Alert>

          }



          <LoadingButton

            fullWidth

            loading={loading}

            variant="contained"

            size="large"

            type="submit"


            sx={{

              borderRadius:3,

              py:1.5

            }}

          >

            Create Account


          </LoadingButton>



        </Stack>


      </form>


    </Paper>

  );

}


export default RegisterForm;