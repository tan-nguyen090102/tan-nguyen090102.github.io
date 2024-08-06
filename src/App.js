import React, { useEffect } from "react";
import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import {
  Slide,
  FormControlLabel,
  Typography,
  Box,
  IconButton,
  Grid,
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
  });

  const useTypeWriter = (text, speed = 50) => {
    const [index, setIndex] = React.useState(0);
    const displayText = React.useMemo(
      () => text.slice(0, index),
      [text, index]
    );
    useEffect(() => {
      if (index >= text.length) return;

      const timeout = setTimeout(() => {
        setIndex((i) => i + 1);
      }, speed);

      return () => {
        clearTimeout(timeout);
      };
    }, [index, text, speed]);

    return displayText;
  };

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
            <Typewriter
              text={"Hi, I'm Tan Nguyen, and I'm a..."}
              speed={50}
            ></Typewriter>
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
              <Typography
                variant="h3"
                align="center"
                display="block"
                marginBottom={10}
              >
                This page is powered by
              </Typography>
              <IconButton href="https://react.dev/" target="_blank">
                <Box
                  component="img"
                  sx={{
                    height: 300,
                    width: 300,
                    maxHeight: { xs: 300, md: 200 },
                    maxWidth: { xs: 300, md: 200 },
                  }}
                  alt="React Logo"
                  src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
                />
              </IconButton>
              <IconButton
                href="https://github.com/tan-nguyen090102/tan-nguyen090102.github.io"
                target="_blank"
              >
                <Box
                  component="img"
                  sx={{
                    height: 300,
                    width: 300,
                    maxHeight: { xs: 300, md: 200 },
                    maxWidth: { xs: 300, md: 200 },
                  }}
                  alt="Github Logo"
                  src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg"
                />
              </IconButton>
              <IconButton href="https://mui.com/material-ui/" target="_blank">
                <Box
                  component="img"
                  sx={{
                    height: 300,
                    width: 300,
                    maxHeight: { xs: 300, md: 200 },
                    maxWidth: { xs: 300, md: 200 },
                  }}
                  alt="Material UI Logo"
                  src="https://mui.com/static/logo.png"
                />
              </IconButton>
              <IconButton href="https://www.vecteezy.com/" target="_blank">
                <Box
                  component="img"
                  sx={{
                    height: 300,
                    width: 300,
                    maxHeight: { xs: 300, md: 200 },
                    maxWidth: { xs: 300, md: 200 },
                  }}
                  alt="Vecteezy Logo"
                  src="https://upload.wikimedia.org/wikipedia/commons/0/00/Vecteezy_logo.svg"
                />
              </IconButton>
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

  const Typewriter = ({ text, speed }) => {
    const displayText = useTypeWriter(text, speed);

    return (
      <Typography variant="h3" align="center" display="block" id="title">
        {displayText}
      </Typography>
    );
  };

  return (
    <Box style={{ background: "#ADD8E6", zIndex: 0 }}>
      <Box
        height="100vh"
        style={{
          background: `url('https://static.vecteezy.com/system/resources/previews/011/887/512/large_2x/halftone-dotted-background-free-png.png')`,
          transform: "rotate(45deg)",
          overflow: "visible",
          paddingLeft: "50px",
          marginLeft: "-55px",
        }}
      >
        <Grid
          wrap="nowrap"
          container
          justifyContent="center"
          alignItems="center"
          spacing={1}
          height="100vh"
          marginLeft={1}
          style={{ zIndex: 2, transform: "rotate(315deg)" }}
        >
          <FormControlLabel
            control={
              <IconButton
                sx={{
                  visibility: pageIndex === 0 ? "hidden" : "visible",
                }}
                disabled={pageIndex === 0}
                onClick={() => handleChange(true)}
                style={{ zIndex: 3 }}
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
                style={{ zIndex: 3 }}
              >
                <ArrowForwardIosOutlinedIcon></ArrowForwardIosOutlinedIcon>
              </IconButton>
            }
          ></FormControlLabel>
        </Grid>
      </Box>
    </Box>
  );
}

export default Portfolio;
