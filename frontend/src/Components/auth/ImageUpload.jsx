import { Avatar, Button, Stack } from "@mui/material";
import { useState } from "react";

function ImageUpload() {
  const [preview, setPreview] = useState("");

  const handleImage = (e) => {
    const file = e.target.files[0];

    if (file) {
      setPreview(URL.createObjectURL(file));
    }
  };

  return (
    <Stack spacing={2} alignItems="center" mb={3}>
      <Avatar
        src={preview}
        sx={{
          width: 100,
          height: 100,
        }}
      />

      <Button
        component="label"
        variant="outlined"
      >
        Upload Photo

        <input
          hidden
          type="file"
          accept="image/*"
          onChange={handleImage}
        />
      </Button>
    </Stack>
  );
}

export default ImageUpload;