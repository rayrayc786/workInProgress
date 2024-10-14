import React, { useState } from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Checkbox,
  FormGroup,
  FormControlLabel,
  Slider,
  Typography,
  Grid,
  FormLabel,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
} from "chart.js";

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title);

const FiltersSidebar = () => {
  // State management for all filters
  const [location, setLocation] = useState("California");
  const [propertyType, setPropertyType] = useState({
    buy: true,
    rent: false,
  });
  const [categories, setCategories] = useState({
    apartment: true,
    villa: false,
    duplex: false,
    houses: false,
    penthouse: false,
  });
  const [propertySize, setPropertySize] = useState([10, 40]);
  const [priceRange, setPriceRange] = useState([10000, 30000]);
  const [bedrooms, setBedrooms] = useState(5);
  const [bathrooms, setBathrooms] = useState(3);

  // Accordion state to manage expansion
  const [expanded, setExpanded] = useState({}); // Use an object to track expanded states

  const handleAccordionChange = (panel) => (event) => {
    setExpanded((prevExpanded) => ({
      ...prevExpanded,
      [panel]: !prevExpanded[panel], // Toggle the current panel
    }));
  };

  // Handlers for each filter
  const handleLocationChange = (event) => setLocation(event.target.value);
  const handlePropertyTypeChange = (event) => {
    setPropertyType({
      ...propertyType,
      [event.target.name]: event.target.checked,
    });
  };

  const handleCategoryChange = (event) => {
    setCategories({
      ...categories,
      [event.target.name]: event.target.checked,
    });
  };

  const handlePropertySizeChange = (event, newValue) => {
    setPropertySize(newValue);
  };

  const handlePriceRangeChange = (event, newValue) => {
    setPriceRange(newValue);
  };

  const handleBedroomsChange = (event) => setBedrooms(event.target.value);
  const handleBathroomsChange = (event) => setBathrooms(event.target.value);

  return (
    <div className="">
      {/* Accordion for Location */}
      <Accordion
        elevation={0}
        expanded={!!expanded["location"]}
        onChange={handleAccordionChange("location")}
      >
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h6">Select Location</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <h1
            className="font-normal text-[12px] leading-4"
            style={{ fontFamily: "Jost" }}
          >
            Location
          </h1>
          <FormControl
            fullWidth
            sx={{
              borderRadius: "10px",
              border: "1px solid #3E54EB",
              height: "50px",
            }}
          >
            <Select
              labelId="location-select-label"
              id="location-select"
              value={location}
              onChange={handleLocationChange}
              sx={{
                border: "none", // Remove border from Select
                height: "50px",
                "& .MuiSelect-select": {
                  padding: "8px", // Adjust padding as needed
                },
                "&:focus": {
                  border: "none", // Remove border on focus
                  boxShadow: "none", // Remove box-shadow on focus
                },
                "& .MuiOutlinedInput-notchedOutline": {
                  border: "none", // Remove outline border for outlined variant
                },
              }}
            >
              <MenuItem value="California">California</MenuItem>
              <MenuItem value="New York">New York</MenuItem>
              <MenuItem value="Florida">Florida</MenuItem>
            </Select>
          </FormControl>
        </AccordionDetails>
      </Accordion>

      {/* Accordion for Property Type */}
      <Accordion
        elevation={0}
        expanded={!!expanded["propertyType"]}
        onChange={handleAccordionChange("propertyType")}
      >
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h6">Property Type</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox
                  checked={propertyType.buy}
                  onChange={handlePropertyTypeChange}
                  name="buy"
                  sx={{
                    color: "#EDEDEE",

                    "&.Mui-checked": {
                      color: "#3E54EB",
                    },
                  }}
                />
              }
              label="Buy"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={propertyType.rent}
                  onChange={handlePropertyTypeChange}
                  name="rent"
                  sx={{
                    color: "#EDEDEE",

                    "&.Mui-checked": {
                      color: "#3E54EB",
                    },
                  }}
                />
              }
              label="Rent"
            />
          </FormGroup>
        </AccordionDetails>
      </Accordion>

      {/* Accordion for Categories */}
      <Accordion
        elevation={0}
        expanded={!!expanded["categories"]}
        onChange={handleAccordionChange("categories")}
      >
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h6">Categories</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox
                  checked={categories.apartment}
                  onChange={handleCategoryChange}
                  name="apartment"
                  sx={{
                    color: "#EDEDEE",

                    "&.Mui-checked": {
                      color: "#3E54EB",
                    },
                  }}
                />
              }
              label="Apartment"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={categories.villa}
                  onChange={handleCategoryChange}
                  name="villa"
                  sx={{
                    color: "#EDEDEE",
                    "&.Mui-checked": {
                      color: "#3E54EB",
                    },
                  }}
                />
              }
              label="Villa"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={categories.duplex}
                  onChange={handleCategoryChange}
                  name="duplex"
                  sx={{
                    color: "#EDEDEE",

                    "&.Mui-checked": {
                      color: "#3E54EB",
                    },
                  }}
                />
              }
              label="Duplex"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={categories.houses}
                  onChange={handleCategoryChange}
                  name="houses"
                  sx={{
                    color: "#EDEDEE",

                    "&.Mui-checked": {
                      color: "#3E54EB",
                    },
                  }}
                />
              }
              label="Houses"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={categories.penthouse}
                  onChange={handleCategoryChange}
                  name="penthouse"
                  sx={{
                    color: "#EDEDEE",

                    "&.Mui-checked": {
                      color: "#3E54EB",
                    },
                  }}
                />
              }
              label="Penthouse"
            />
          </FormGroup>
        </AccordionDetails>
      </Accordion>

      {/* Accordion for Property Size */}
      <Accordion
        elevation={0}
        expanded={!!expanded["propertySize"]}
        onChange={handleAccordionChange("propertySize")}
      >
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h6">Property Size</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <h1
            className="font-normal text-[16px] leading-6 t-[#0F1015]"
            style={{ fontFamily: "Jost" }}
          >
            Size: ${propertySize[0]} - ${propertySize[1]} sqft
          </h1>

          <Slider
            value={propertySize}
            onChange={handlePropertySizeChange}
            valueLabelDisplay="auto"
            sx={{
              // Customize the slider track and thumb
              color: "#A4A6AC33", // Color of the track
              "& .MuiSlider-thumb": {
                backgroundColor: "#3E54EB", // Color of the thumb (circle)
                "&:hover": {
                  boxShadow: "none", // Remove hover shadow if desired
                },
              },
              "& .MuiSlider-track": {
                backgroundColor: "#3E54EB", // Optional: color of the track
              },
            }}
          />
        </AccordionDetails>
      </Accordion>

      {/* Accordion for Price Range */}
      <Accordion
        elevation={0}
        expanded={!!expanded["priceRange"]}
        onChange={handleAccordionChange("priceRange")}
      >
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h6">Price Range</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <h1
            className="font-normal text-[16px] leading-6 t-[#0F1015]"
            style={{ fontFamily: "Jost" }}
          >
            Price: ${priceRange[0]} - ${priceRange[1]}
          </h1>

          {/* Price Range Slider or Chart can go here */}
          <Slider
            value={priceRange}
            onChange={handlePriceRangeChange}
            valueLabelDisplay="auto"
            sx={{
              // Customize the slider track and thumb
              color: "#A4A6AC33", // Color of the track
              "& .MuiSlider-thumb": {
                backgroundColor: "#3E54EB", // Color of the thumb (circle)
                "&:hover": {
                  boxShadow: "none", // Remove hover shadow if desired
                },
              },
              "& .MuiSlider-track": {
                backgroundColor: "#3E54EB", // Optional: color of the track
              },
            }}
          />
        </AccordionDetails>
      </Accordion>

      {/* Accordion for Bedrooms */}
      <Accordion
        elevation={0}
        expanded={!!expanded["rooms"]}
        onChange={handleAccordionChange("rooms")}
      >
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h6">Rooms</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <h1
              className="font-normal text-[16px] leading-6 t-[#0F1015]"
              style={{ fontFamily: "Jost" }}
            >
              Bedroom
            </h1>
          <FormControl fullWidth sx={{
              borderRadius: "10px",
              border: "1px solid #3E54EB",
              height: "50px",
            }}>
            

            <Select
              labelId="bedroom-select-label"
              id="bedroom-select"
              value={bedrooms}
              onChange={handleBedroomsChange}
              sx={{
                border: "none", // Remove border from Select
                height: "50px",
                "& .MuiSelect-select": {
                  padding: "8px", // Adjust padding as needed
                },
                "&:focus": {
                  border: "none", // Remove border on focus
                  boxShadow: "none", // Remove box-shadow on focus
                },
                "& .MuiOutlinedInput-notchedOutline": {
                  border: "none", // Remove outline border for outlined variant
                },
              }}
            >
              <MenuItem value={1}>1</MenuItem>
              <MenuItem value={2}>2</MenuItem>
              <MenuItem value={3}>3</MenuItem>
              <MenuItem value={4}>4</MenuItem>
              <MenuItem value={5}>5</MenuItem>
            </Select>
          </FormControl>

          <h1
              className="font-normal text-[16px] leading-6 t-[#0F1015]"
              style={{ fontFamily: "Jost" }}
            >
              Bathroom
            </h1>
          <FormControl fullWidth sx={{
              borderRadius: "10px",
              border: "1px solid #3E54EB",
              height: "50px",
            }}>
            

            <Select
              labelId="bathroom-select-label"
              id="bathroom-select"
              value={bathrooms}
              onChange={handleBathroomsChange}
              sx={{
                border: "none", // Remove border from Select
                height: "50px",
                "& .MuiSelect-select": {
                  padding: "8px", // Adjust padding as needed
                },
                "&:focus": {
                  border: "none", // Remove border on focus
                  boxShadow: "none", // Remove box-shadow on focus
                },
                "& .MuiOutlinedInput-notchedOutline": {
                  border: "none", // Remove outline border for outlined variant
                },
              }}
            >
              <MenuItem value={1}>1</MenuItem>
              <MenuItem value={2}>2</MenuItem>
              <MenuItem value={3}>3</MenuItem>
            </Select>
          </FormControl>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default FiltersSidebar;
