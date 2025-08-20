import React from "react";
import {Button as MuiButton, type ButtonProps} from "@mui/material";

const Button: React.FC<ButtonProps> = (props) => {
  
  return <MuiButton variant="contained" {...props} />;
};

export default Button;
