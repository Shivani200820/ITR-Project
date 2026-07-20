import { Card, CardMedia, CardContent, Typography } from "@mui/material";

function ComplaintImage() {
  return (
    <Card
      elevation={0}
      sx={{
        borderRadius: 4,
        overflow: "hidden",
      }}
    >
      <CardMedia
        component="img"
        height="300"
        image="https://images.unsplash.com/photo-1516321318423-f06f85e504b3"
        alt="Complaint"
      />

      <CardContent>
        <Typography variant="h6">
          Complaint Image
        </Typography>
      </CardContent>
    </Card>
  );
}

export default ComplaintImage;