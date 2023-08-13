import React, { FC } from "react";
import { GitHub, LinkedIn } from "@mui/icons-material";
import { Stack } from "@mui/material";
import { Link } from "react-router-dom";

const SocialMediaIcons: FC = () => {
  const iconList = [
    { icon: <GitHub />, url: "https://github.com/staatzstreich" },
    {
      icon: <LinkedIn />,
      url: "https://www.linkedin.com/in/michael-staatz-751723207/",
    },
  ];

  return (
    <>
      {iconList.map((icon, index) => (
        <Stack
          key={index}
          component={Link}
          to={icon.url}
          target="_blank"
          sx={{ color: "white" }}
        >
          {React.cloneElement(icon.icon, {
            fontSize: "large",
          })}
        </Stack>
      ))}
    </>
  );
};

export default SocialMediaIcons;
