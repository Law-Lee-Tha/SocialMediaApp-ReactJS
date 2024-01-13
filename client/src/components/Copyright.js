import { Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Copyright = () => {
  return (
    <Typography variant="subtitle1" color="text.secondary">
      Copyright © 20{""}
      <Link to="/" color="inherit">
        23lalitha❤️'s-era
      </Link>
    </Typography>
  );
};

export default Copyright;
