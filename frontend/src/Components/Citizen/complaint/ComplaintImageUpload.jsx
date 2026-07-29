import { useState } from "react";
import {
  Avatar,
  Button,
  Stack,
  Typography,
} from "@mui/material";

function ComplaintImageUpload({ onImageSelect }) {
  const [preview, setPreview] = useState("");

  const handleImage = (event) => {
    const file = event.target.files[0];

    if (file) {
      setPreview(URL.createObjectURL(file));

      if (onImageSelect) {
        onImageSelect(file);
      }
    }
  };

  return (
    <Stack spacing={2} alignItems="center">
      <Avatar
        src={preview}
        variant="rounded"
        sx={{
          width: 220,
          height: 220,
        }}
      />

      <Button
        variant="outlined"
        component="label"
      >
        Upload Complaint Image

        <input
          hidden
          type="file"
          accept="image/*"
          onChange={handleImage}
        />
      </Button>

      <Typography variant="body2">
        JPG, PNG (Max 5MB)
      </Typography>
    </Stack>
  );
}

export default ComplaintImageUpload;