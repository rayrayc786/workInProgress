import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Box,
  LinearProgress,
  styled,
  linearProgressClasses,
  IconButton, // Import the IconButton component for adding a heart icon
} from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 20,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    borderRadius: 50,

    backgroundColor: "#AFB7F1",
    ...theme.applyStyles("dark", {
      backgroundColor: "#AFB7F1",
    }),
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 50,
    backgroundColor: "#3E54EB",
    ...theme.applyStyles("dark", {
      backgroundColor: "#3E54EB",
    }),
  },
}));
const PropertyCard = ({ property }) => {
  const [isFavorited, setIsFavorited] = useState(false);

  const handleFavoriteToggle = () => {
    setIsFavorited(!isFavorited);
    // Optionally, add your logic to handle the favorite state (e.g., API call)
  };
  return (
    <Card className="mb-4 p-4 bg-white w-full" elevation={0}>
      <Box className="flex flex-col sm:flex-row">
        <Box className="relative flex-shrink-0 w-full sm:w-[250px]">
          {/* Wrap image in a Box */}
          <IconButton
            onClick={handleFavoriteToggle}
            style={{
              position: "absolute",
              top: "10px",
              right: "10px",
              borderRadius: "5px",
              background: "rgba(255, 255, 255, 0.8)",
            }}
          >
            <FavoriteBorderIcon color={isFavorited ? "error" : "action"} />
          </IconButton>
          <CardMedia
            component="img"
            image={property.image}
            alt={property.name}
            style={{ width: "100%", height: "auto" }}
          />
        </Box>

        <CardContent className="flex-grow px-2 py-4" sx={{paddingTop:'0px'}}>
          <h1 className="font-bold text-[24px] leading-8 sm:text-[16px]">{property.name}</h1>
          <Box className="flex gap-2 items-center">
            <LocationOnOutlinedIcon fontSize="24px" />
            <h1 className="font-normal text-[16px]" style={{ fontFamily: "Jost" }}>
              {property.location}
            </h1>
          </Box>

          <Box className="flex justify-between mt-4">
            <Box className="flex flex-col items-start">
              <h1 className="font-bold text-[20px]">${property.minInvested}</h1>
              <h1 className="font-normal text-[16px]" style={{ fontFamily: "Jost" }}>
                Min. Investment
              </h1>
            </Box>
            <Box className="flex flex-col items-start">
              <h1 className="font-bold text-[20px]">${property.propertyValue}</h1>
              <h1 className="font-normal text-[16px]" style={{ fontFamily: "Jost" }}>
                Property Value
              </h1>
            </Box>
          </Box>

          <Box className="my-2">
            <BorderLinearProgress variant="determinate" value={50} />
          </Box>

          <Box className="flex flex-row justify-between bg-[#EDEFFF] p-3 rounded-2xl">
            <Box className="flex flex-col justify-center items-center">
              <h1 className="text-[#3E54EB] text-[14px]" style={{ fontFamily: "Jost" }}>
                Est. Yield
              </h1>
              <h1 className="font-semibold text-[20px] text-center" style={{ fontFamily: "Jost" }}>
                3.5%
              </h1>
            </Box>

            <Box className="flex flex-col justify-center items-center">
              <h1 className="text-[#3E54EB] text-[14px]" style={{ fontFamily: "Jost" }}>
                Target ARR
              </h1>
              <h1 className="font-semibold text-[20px] text-center" style={{ fontFamily: "Jost" }}>
                15%
              </h1>
            </Box>

            <Box className="flex flex-col justify-center items-center">
              <h1 className="text-[#3E54EB] text-[14px]" style={{ fontFamily: "Jost" }}>
                Potential Gain
              </h1>
              <h1 className="font-semibold text-[20px] text-center" style={{ fontFamily: "Jost" }}>
                10%
              </h1>
            </Box>
          </Box>
        </CardContent>
      </Box>
    </Card>
  );
};

export default PropertyCard;
