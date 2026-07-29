import { Box, Typography, Button } from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

function AIUploadBox({ onImageSelect }) {
  const handleFile = (e) => {
    if (e.target.files[0]) {
      onImageSelect(e.target.files[0]);
    }
  };

  return (
    <Box
      sx={{
        border: "2px dashed #1976D2",
        borderRadius: 4,
        p: 5,
        textAlign: "center",
        bgcolor: "#F8FAFC",
        transition: ".3s",
        "&:hover": {
          bgcolor: "#EEF6FF",
          borderColor: "#1565C0",
        },
      }}
    >
      <CloudUploadIcon
        sx={{
          fontSize: 70,
          color: "#1976D2",
        }}
      />

      <Typography
        variant="h6"
        mt={2}
        fontWeight="bold"
      >
        Drag & Drop Complaint Image
      </Typography>

      <Typography color="text.secondary" mt={1}>
        JPG, PNG, JPEG
      </Typography>

      <Button
        component="label"
        variant="contained"
        sx={{ mt: 3 }}
      >
        Choose Image

        <input
          hidden
          type="file"
          accept="image/*"
          onChange={handleFile}
        />
      </Button>
    </Box>
  );
}

export default AIUploadBox;