import { Card, CardMedia } from "@mui/material";

function AIImagePreview({ image }) {
  return (
    <Card sx={{ borderRadius: 3 }}>
      <CardMedia
        component="img"
        height="350"
        image={
          image ||
          "https://images.unsplash.com/photo-1504307651254-35680f356dfc?w=1000"
        }
        alt="Complaint"
      />
    </Card>
  );
}

export default AIImagePreview;