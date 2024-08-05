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
  Grid,
  CardMedia,
} from "@mui/material";

function Portfolio() {
  const TRANSITION_TIME = 300;
  const [pageIndex, setPageIndex] = React.useState(0);
  const [checked, setChecked] = React.useState(true);
  const [isEntering, setEntering] = React.useState(false);
  const [isPreviousButton, setPreviousButton] = React.useState(false);
  const [isPreviousPage, setPreviousPage] = React.useState(false);
  const [isFinishExitingOne, setFinishExitingOne] = React.useState(true);
  const [isFinishExitingTwo, setFinishExitingTwo] = React.useState(false);

  useEffect(() => {
    document.title = "Portfolio - Tan Nguyen";
  }, []);

  const handleChange = (isPrevious) => {
    if (isPrevious) {
      setPageIndex(pageIndex - 1);
      setPreviousButton(true);
      setChecked((prev) => !prev);
    } else {
      setPageIndex(pageIndex + 1);
      setPreviousButton(false);
      setChecked((prev) => !prev);
    }
  };

  const handleEnter = () => {
    setEntering(true);
  };

  const handleOnExit = () => {
    setPreviousPage(true);
  };

  const handleExitOne = () => {
    setFinishExitingOne(true);
    setFinishExitingTwo(false);
    setEntering(false);
    setPreviousPage(false);
  };

  const handleExitTwo = () => {
    setFinishExitingTwo(true);
    setFinishExitingOne(false);
    setEntering(false);
    setPreviousPage(false);
  };

  function currentPage(padding = 0) {
    switch (pageIndex + padding) {
      case 0:
        return (
          <Box width="190vh">
            <Typography variant="h3" align="center" display="block">
              Hi, I'm Tan Nguyen, and I'm a ...
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
                Page 2
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
                Page 3
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
                Page 4
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
                Page 5
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
        {isFinishExitingTwo
          ? pageIndex === 0 && currentPage()
          : pageIndex === 0 && (
              <Slide
                direction="right"
                in={checked}
                timeout={{
                  enter: TRANSITION_TIME,
                  exit: TRANSITION_TIME,
                }}
                mountOnEnter
                unmountOnExit
                onEnter={() => handleEnter()}
                onExit={() => handleOnExit()}
                onExited={() => handleExitOne()}
              >
                {currentPage()}
              </Slide>
            )}
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
        >
          {isFinishExitingTwo && (
            <Slide
              direction="right"
              in={checked}
              timeout={{
                enter: TRANSITION_TIME,
                exit: TRANSITION_TIME,
              }}
              mountOnEnter
              unmountOnExit
              onEnter={() => handleEnter()}
              onExit={() => handleOnExit()}
              onExited={() => handleExitOne()}
            >
              {currentPage(isPreviousPage ? (isPreviousButton ? 1 : -1) : 0)}
            </Slide>
          )}
          {isFinishExitingOne && pageIndex !== 0 && (
            <Slide
              direction="left"
              in={!checked}
              timeout={{
                enter: TRANSITION_TIME,
                exit: TRANSITION_TIME,
              }}
              mountOnEnter
              unmountOnExit
              onEnter={() => handleEnter()}
              onExit={() => handleOnExit()}
              onExited={() => handleExitTwo()}
            >
              {currentPage(isPreviousPage ? (isPreviousButton ? 1 : -1) : 0)}
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
