import { Divider as MuiDivider } from "@mui/material";
import { FC } from "react";

const Divider: FC = () => (
  <MuiDivider
    component="hr"
    sx={{
      backgroundColor: "#80ff87",
      border: "none",
      height: "1px",
      marginBottom: "1.5rem",
      marginTop: "1.5rem",
      transformOrigin: "center left",
      width: "4rem",
    }}
  />
);
export default Divider;
