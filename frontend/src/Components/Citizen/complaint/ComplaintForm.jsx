import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

import {
  Paper,
  Grid,
  TextField,
  MenuItem,
  Typography,
} from "@mui/material";

import { LoadingButton } from "@mui/lab";

import { analyzeComplaint } from "../../../services/complaintService";

import ComplaintImageUpload from "./ComplaintImageUpload";
import LocationButton from "./LocationButton";
import VoiceUpload from "./VoiceUpload";

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

  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {

    if (!image) {
      alert("Please upload a complaint image.");
      return;
    }

    try {

      setLoading(true);

      const formData = new FormData();

      formData.append("image", image);
      formData.append("title", data.title);
      formData.append("description", data.description);
      formData.append("category", data.category);

      const aiData = await analyzeComplaint(formData);

      navigate("/citizen/ai-preview", {
        state: aiData,
      });

    } catch (error) {

      console.error(error);
      alert("AI analysis failed.");

    } finally {

      setLoading(false);

    }

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

            <ComplaintImageUpload
              onImageSelect={setImage}
            />

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
              loading={loading}
              type="submit"
              variant="contained"
              size="large"
              fullWidth
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