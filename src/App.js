import React, { useEffect } from "react";
import Button from "@mui/material/Button";
import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import {
  Slide,
  FormControlLabel,
  Typography,
  Box,
  IconButton,
  Stack,
  Grid,
} from "@mui/material";

function Portfolio() {
  const [pageIndex, setPageIndex] = React.useState(0);
  const [checked, setChecked] = React.useState(true);

  useEffect(() => {
    document.title = "Portfolio - Tan Nguyen";
  }, []);

  const handleChange = (isPrevious) => {
    if (isPrevious) {
      setPageIndex(pageIndex - 1);
      setChecked((prev) => !prev);
    } else {
      setPageIndex(pageIndex + 1);
      setChecked((prev) => !prev);
    }
  };

  function currentPage() {
    switch (pageIndex) {
      case 0:
        return (
          <Box width="190vh">
            <Typography variant="h1" align="center" display="block">
              Page 0
            </Typography>
          </Box>
        );
      case 1:
        return (
          <Box width="190vh" align="center">
            <Box
              width="150vh"
              height="70vh"
              style={{ background: "#FCFBF4" }}
              sx={{ borderRadius: "20px" }}
              justifyContent="center"
              alignItems="center"
            >
              <Typography variant="h1" align="center" display="block">
                Page 1
              </Typography>
            </Box>
          </Box>
        );
      case 2:
        return (
          <Box width="190vh" align="center">
            <Box
              width="150vh"
              height="70vh"
              style={{ background: "#FCFBF4" }}
              sx={{ borderRadius: "20px" }}
              justifyContent="center"
              alignItems="center"
            >
              <Typography variant="h1" align="center" display="block">
                Page 1
              </Typography>
            </Box>
          </Box>
        );
      case 3:
        return (
          <Box width="190vh" align="center">
            <Box
              width="150vh"
              height="70vh"
              style={{ background: "#FCFBF4" }}
              sx={{ borderRadius: "20px" }}
              justifyContent="center"
              alignItems="center"
            >
              <Typography variant="h1" align="center" display="block">
                Page 1
              </Typography>
            </Box>
          </Box>
        );
      case 4:
        return (
          <Box width="190vh" align="center">
            <Box
              width="150vh"
              height="70vh"
              style={{ background: "#FCFBF4" }}
              sx={{ borderRadius: "20px" }}
              justifyContent="center"
              alignItems="center"
            >
              <Typography variant="h1" align="center" display="block">
                Page 1
              </Typography>
            </Box>
          </Box>
        );
      case 5:
        return (
          <Box width="190vh" align="center">
            <Box
              width="150vh"
              height="70vh"
              style={{ background: "#FCFBF4" }}
              sx={{ borderRadius: "20px" }}
              justifyContent="center"
              alignItems="center"
            >
              <Typography variant="h1" align="center" display="block">
                Page 1
              </Typography>
            </Box>
          </Box>
        );
      default:
        return (
          <Box width="190vh" align="center">
            <Typography variant="h1" align="center" display="block">
              404 Page Not Found
            </Typography>
          </Box>
        );
    }
  }

  return (
    <Box maxHeight={false} style={{ background: "#ADD8E6" }}>
      <Grid
        maxHeight={false}
        container
        wrap="nowrap"
        justifyContent="center"
        alignItems="center"
        spacing={1}
        height="100vh"
        marginLeft={1}
      >
        <FormControlLabel
          control={
            <IconButton
              sx={{
                visibility: pageIndex === 0 ? "hidden" : "visible",
              }}
              disabled={pageIndex === 0}
              onClick={() => handleChange(true)}
            >
              <ArrowBackIosNewOutlinedIcon></ArrowBackIosNewOutlinedIcon>
            </IconButton>
          }
        ></FormControlLabel>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
        >
          {checked && (
            <Slide direction="left" in={checked} mountOnEnter unmountOnExit>
              {currentPage()}
            </Slide>
          )}
          {!checked && (
            <Slide direction="right" in={!checked} mountOnEnter unmountOnExit>
              {currentPage()}
            </Slide>
          )}
        </Box>
        <FormControlLabel
          control={
            <IconButton
              sx={{
                visibility: pageIndex === 5 ? "hidden" : "visible",
              }}
              disabled={pageIndex === 5}
              onClick={() => handleChange(false)}
            >
              <ArrowForwardIosOutlinedIcon></ArrowForwardIosOutlinedIcon>
            </IconButton>
          }
        ></FormControlLabel>
      </Grid>
    </Box>
  );
}

export default Portfolio;
