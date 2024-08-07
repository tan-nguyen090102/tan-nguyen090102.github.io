import React, { useEffect, useCallback } from "react";
import "./index.css";
import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import {
  Slide,
  FormControlLabel,
  Typography,
  Box,
  IconButton,
  Grid,
  Stack,
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
  const [isEndText, setEndText] = React.useState(false);
  const [isLeftHopping, setLeftHopping] = React.useState(false);
  const [isRightHopping, setRightHopping] = React.useState(false);
  const [y, setY] = React.useState(window.scrollY);

  useEffect(() => {
    document.title = "Portfolio - Tan Nguyen";
  });

  const handleNavigation = useCallback(
    (event) => {
      const window = event.currentTarget;
      if (y > window.scrollY) {
        console.log("scrolling up");
      } else if (y < window.scrollY) {
        console.log("scrolling down");
      }
      setY(window.scrollY);
    },
    [y]
  );

  useEffect(() => {
    setY(window.scrollY);
    window.addEventListener("wheel", handleNavigation);

    return () => {
      window.removeEventListener("wheel", handleNavigation);
    };
  }, [handleNavigation]);

  const useTypeWriter = (text, speed = 50) => {
    const [index, setIndex] = React.useState(0);
    const displayText = React.useMemo(
      () => text.slice(0, index),
      [text, index]
    );

    useEffect(() => {
      if (index >= text.length) {
        return;
      }

      const timeout = setTimeout(() => {
        setIndex((i) => i + 1);
      }, speed);

      return () => {
        clearTimeout(timeout);
      };
    }, [index, text, speed]);

    return displayText;
  };

  const handleChange = async (isPrevious) => {
    if (isPrevious) {
      setPageIndex(pageIndex - 1);
      setPreviousButton(true);
      setChecked((prev) => !prev);
    } else {
      setPageIndex(pageIndex + 1);
      setPreviousButton(false);
      setChecked((prev) => !prev);
    }
    setEndText(false);
  };

  const handleMouseEnter = (isLeft) => {
    isLeft ? setLeftHopping(true) : setRightHopping(true);
  };

  const handleMouseExit = (isLeft) => {
    isLeft ? setLeftHopping(false) : setRightHopping(false);
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
          <Box
            width="190vh"
            justifyContent="center"
            alignContent="center"
            style={{ overflow: "hidden" }}
          >
            {!isEndText && (
              <Typewriter
                text={"Nice to meet you, I'm Tan Nguyen!"}
                speed={50}
              ></Typewriter>
            )}
            {isEndText && (
              <Typography
                inline="true"
                variant="h3"
                align="center"
                display="block"
                id="title"
                fontWeight={"fontWeightBold"}
                className="blinking-cursor"
              >
                Nice to meet you, I'm Tan Nguyen!
              </Typography>
            )}
          </Box>
        );
      case 1:
        return (
          <Box width="190vh" align="center" style={{ overflow: "hidden" }}>
            <Box
              width="150vh"
              height="70vh"
              style={{ background: "#31b5e0", overflow: "clip" }}
              sx={{ borderRadius: "20px" }}
              justifyContent="center"
              alignItems="center"
              margin={0}
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
              style={{ background: "#31b5e0", overflow: "hidden" }}
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
              style={{ background: "#31b5e0", overflow: "hidden" }}
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
              style={{ background: "#31b5e0", overflow: "hidden" }}
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
          <Box width="190vh" align="center" style={{ overflow: "hidden" }}>
            <Box
              width="150vh"
              height="70vh"
              style={{ background: "#31b5e0" }}
              sx={{ borderRadius: "20px", overflow: "hidden" }}
              justifyContent="center"
              alignItems="center"
            >
              <Typography
                variant="h3"
                align="center"
                justifyContent="center"
                display="block"
                marginBottom={3}
                style={{ overflow: "hidden" }}
              >
                Powered by
              </Typography>
              <Box
                style={{ background: "#FCFBF4", overflow: "hidden" }}
                sx={{ borderRadius: "20px" }}
                justifyContent="center"
                alignItems="center"
                marginX={15}
              >
                <IconButton href="https://react.dev/" target="_blank">
                  <Box
                    component="img"
                    sx={{
                      height: 200,
                      width: 200,
                      maxHeight: { xs: 200, md: 100 },
                      maxWidth: { xs: 200, md: 100 },
                    }}
                    style={{ overflow: "hidden" }}
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
                      height: 200,
                      width: 200,
                      maxHeight: { xs: 200, md: 100 },
                      maxWidth: { xs: 200, md: 100 },
                    }}
                    style={{ overflow: "hidden" }}
                    alt="Github Logo"
                    src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg"
                  />
                </IconButton>
                <IconButton href="https://mui.com/material-ui/" target="_blank">
                  <Box
                    component="img"
                    sx={{
                      height: 200,
                      width: 200,
                      maxHeight: { xs: 200, md: 100 },
                      maxWidth: { xs: 200, md: 100 },
                    }}
                    style={{ overflow: "hidden" }}
                    alt="Material UI Logo"
                    src="https://mui.com/static/logo.png"
                  />
                </IconButton>
                <IconButton href="https://www.vecteezy.com/" target="_blank">
                  <Box
                    component="img"
                    sx={{
                      height: 200,
                      width: 200,
                      maxHeight: { xs: 200, md: 100 },
                      maxWidth: { xs: 200, md: 100 },
                    }}
                    style={{ overflow: "hidden" }}
                    alt="Vecteezy Logo"
                    src="https://upload.wikimedia.org/wikipedia/commons/0/00/Vecteezy_logo.svg"
                  />
                </IconButton>
              </Box>
              <Typography
                variant="h5"
                align="center"
                justifyContent="center"
                display="block"
                marginTop={3}
                style={{ overflow: "hidden" }}
              >
                CONTACT ME AT
                <Box spacing={2} style={{ overflow: "hidden" }}>
                  <IconButton
                    href="https://www.linkedin.com/in/tan-nguyen-87691428b/"
                    target="_blank"
                  >
                    <Box
                      component="img"
                      sx={{
                        height: 100,
                        width: 100,
                        maxHeight: { xs: 100, md: 50 },
                        maxWidth: { xs: 100, md: 50 },
                      }}
                      style={{ overflow: "hidden" }}
                      alt="Linkedin Logo"
                      src="https://upload.wikimedia.org/wikipedia/commons/8/81/LinkedIn_icon.svg"
                    />
                  </IconButton>
                  <IconButton
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=nguyenthanhtan090102@gmail.com"
                    target="_blank"
                  >
                    <Box
                      component="img"
                      sx={{
                        height: 100,
                        width: 100,
                        maxHeight: { xs: 100, md: 50 },
                        maxWidth: { xs: 100, md: 50 },
                      }}
                      style={{ overflow: "hidden" }}
                      alt="Gmail Logo"
                      src="https://upload.wikimedia.org/wikipedia/commons/7/7e/Gmail_icon_%282020%29.svg"
                    />
                  </IconButton>
                </Box>
              </Typography>
              <Typography marginTop={10}>
                Created by Tan Nguyen © 2024
              </Typography>
            </Box>
          </Box>
        );
      default:
        return (
          <Box width="190vh" align="center" style={{ overflow: "hidden" }}>
            <Typography variant="h1" align="center" display="block">
              404 Page Not Found
            </Typography>
          </Box>
        );
    }
  }

  const Typewriter = ({ text, speed }) => {
    const displayText = useTypeWriter(text, speed);

    if (displayText === text) {
      setEndText(true);
      return;
    }

    return (
      <Typography
        inline="true"
        variant="h3"
        align="center"
        display="block"
        id="title"
        fontWeight={"fontWeightBold"}
        className={displayText === text ? "blinking-cursor" : "stable-cursor"}
      >
        {displayText}
      </Typography>
    );
  };

  return (
    <>
      <div
        className="low-opacity-background"
        style={{ overflow: "hidden" }}
      ></div>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        spacing={1}
        height="100vh"
        maxWidth={true}
        margin={0}
        style={{ overflow: "hidden" }}
      >
        <FormControlLabel
          control={
            <IconButton
              sx={{
                visibility: pageIndex === 0 ? "hidden" : "visible",
                transform: "rotate(90deg)",
              }}
              disabled={pageIndex === 0}
              onClick={() => handleChange(true)}
              style={{ zIndex: 1, position: "absolute", overflow: "hidden" }}
              className={isLeftHopping ? "hopping-left-arrow" : "stay-arrow"}
              onMouseEnter={() => handleMouseEnter(true)}
              onMouseLeave={() => handleMouseExit(true)}
            >
              <ArrowBackIosNewOutlinedIcon></ArrowBackIosNewOutlinedIcon>
            </IconButton>
          }
        ></FormControlLabel>
        {isFinishExitingTwo
          ? pageIndex === 0 && currentPage()
          : pageIndex === 0 && (
              <Slide
                direction="up"
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
          margin={0}
        >
          {isFinishExitingTwo && (
            <Slide
              direction="up"
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
              direction="down"
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
                transform: "rotate(90deg)",
              }}
              disabled={pageIndex === 5}
              onClick={() => handleChange(false)}
              style={{ zIndex: 1, position: "absolute", overflow: "hidden" }}
              className={isRightHopping ? "hopping-right-arrow" : "stay-arrow"}
              onMouseEnter={() => handleMouseEnter(false)}
              onMouseLeave={() => handleMouseExit(false)}
            >
              <ArrowForwardIosOutlinedIcon></ArrowForwardIosOutlinedIcon>
            </IconButton>
          }
        ></FormControlLabel>
      </Grid>
    </>
  );
}

export default Portfolio;
