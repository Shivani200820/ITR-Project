import { useForm } from "react-hook-form";

import {
  Paper,
  Grid,
  TextField,
  MenuItem,
  Typography,
} from "@mui/material";

import { LoadingButton } from "@mui/lab";

import ComplaintImageUpload from "./ComplaintImageUpload";
import LocationButton from "./LocationButton";
import VoiceUpload from "./VoiceUpload";
import { useNavigate } from "react-router-dom";

const navigate = useNavigate();

const onSubmit = (data) => {
  console.log(data);

  navigate("/citizen/ai-preview");
};
const categories = [
  "Road Damage",
  "Garbage",
  "Water Supply",
  "Street Light",
  "Drainage",
  "Electricity",
  "Public Park",
  "Other",
];
function ComplaintForm() {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);

    // Next module:
    // Navigate to AI Preview
  };

  return (
    <Paper
      sx={{
        p: 5,
        borderRadius: 4,
      }}
    >
      <Typography
        variant="h4"
        fontWeight="bold"
        mb={4}
      >
        Register Complaint
      </Typography>

      <form onSubmit={handleSubmit(onSubmit)}>

        <Grid container spacing={3}>

          <Grid item xs={12} md={4}>
            <ComplaintImageUpload />
          </Grid>

          <Grid item xs={12} md={8}>

            <TextField
              fullWidth
              label="Complaint Title"
              margin="normal"
              {...register("title", {
                required: "Title is required",
              })}
              error={!!errors.title}
              helperText={errors.title?.message}
            />

            <TextField
              fullWidth
              multiline
              rows={4}
              label="Description"
              margin="normal"
              {...register("description")}
            />

            <TextField
              fullWidth
              select
              margin="normal"
              label="Category"
              defaultValue=""
              {...register("category", {
                required: "Select a category",
              })}
              error={!!errors.category}
              helperText={errors.category?.message}
            >
              {categories.map((category) => (
                <MenuItem
                  key={category}
                  value={category}
                >
                  {category}
                </MenuItem>
              ))}
            </TextField>

            <LocationButton />

            <br />
            <br />

            <VoiceUpload />

            <LoadingButton
              fullWidth
              variant="contained"
              size="large"
              type="submit"
              sx={{ mt: 4 }}
            >
              Analyze with AI
            </LoadingButton>

          </Grid>

        </Grid>

      </form>

    </Paper>
  );
}

export default ComplaintForm;