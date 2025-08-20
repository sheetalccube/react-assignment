import React from "react";
import {TextField as MuiTextField, type TextFieldProps} from "@mui/material";

const TextField: React.FC<TextFieldProps> = (props) => {
  return <MuiTextField fullWidth margin="normal" {...props} />;
};

export default TextField;
