import {
  Card,
  CardContent,
  Typography,
  Box,
} from "@mui/material";


function StatCard({ title, value, icon, color }) {

  return (

    <Card
      elevation={0}
      sx={{
        borderRadius: 4,
        border: "1px solid #E5E7EB",
        transition: "0.3s",

        "&:hover": {
          transform: "translateY(-6px)",
          boxShadow: "0 12px 30px rgba(0,0,0,0.12)",
        },
      }}
    >

      <CardContent>

        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >

          {/* Text */}

          <Box>

            <Typography
              color="text.secondary"
              fontSize={15}
            >
              {title}
            </Typography>


            <Typography
              variant="h4"
              fontWeight="bold"
              mt={1}
            >
              {value}
            </Typography>


          </Box>



          {/* Icon */}

          <Box
            sx={{
              background: color,
              color: "#fff",
              width: 55,
              height: 55,
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >

            {icon}

          </Box>


        </Box>


      </CardContent>


    </Card>

  );

}


export default StatCard;