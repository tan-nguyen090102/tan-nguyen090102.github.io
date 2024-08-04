import React, { useEffect } from "react";
import Button from "@mui/material/Button";
import {
  Slide,
  FormControlLabel,
  Typography,
  ButtonGroup,
  Box,
} from "@mui/material";

function Portfolio() {
  const [pageIndex, setPageIndex] = React.useState(0);
  const [checked, setChecked] = React.useState(true);

  useEffect(() => {
    document.title = "Portfolio - Tan Nguyen";
  }, []);

  const handleChange = (isPrevious) => {
    if (isPrevious) {
      setChecked((prev) => !prev);
      setPageIndex(pageIndex - 1);
    } else {
      setChecked((prev) => !prev);
      setPageIndex(pageIndex + 1);
    }
  };

  function currentPage() {
    switch (pageIndex) {
      case 0:
        return (
          <div>
            <Typography variant="h1" align="center" display="block">
              Page 0
            </Typography>
          </div>
        );
      case 1:
        return (
          <div>
            <Typography variant="h1" align="center" display="block">
              Page 1
            </Typography>
          </div>
        );
      case 2:
        return (
          <div>
            <Typography variant="h1" align="center" display="block">
              Page 2
            </Typography>
          </div>
        );

      case 3:
        return (
          <div>
            <Typography variant="h1" align="center" display="block">
              Page 3
            </Typography>
          </div>
        );

      case 4:
        return (
          <div>
            <Typography variant="h1" align="center" display="block">
              Page 4
            </Typography>
          </div>
        );

      case 5:
        return (
          <div>
            <Typography variant="h1" align="center" display="block">
              Page 5
            </Typography>
          </div>
        );
    }
  }

  return (
    <Box height="100vh" style={{ background: "#f2f6fc" }}>
      {checked && (
        <Slide direction="left" in={checked}>
          {currentPage()}
        </Slide>
      )}
      {!checked && (
        <Slide direction="right" in={!checked}>
          {currentPage()}
        </Slide>
      )}
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
      >
        <ButtonGroup>
          <FormControlLabel
            control={
              <Button
                variant="contained"
                disabled={pageIndex === 0}
                onClick={() => handleChange(true)}
              >
                Previous
              </Button>
            }
          />
          <FormControlLabel
            control={
              <Button
                variant="contained"
                disabled={pageIndex === 5}
                onClick={() => handleChange(false)}
              >
                Next
              </Button>
            }
          />
        </ButtonGroup>
      </Box>
    </Box>
  );
}

export default Portfolio;
