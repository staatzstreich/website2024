import { FC } from "react";
import { Stack } from "@mui/material";
import LanguagePopover from "./LanguagePopover";
import SocialMediaIcons from "./SocialMediaIcons";

const Footer: FC = () => {
  return (
    <Stack direction={"row"} spacing={2}>
      <SocialMediaIcons />
      <LanguagePopover />
    </Stack>
  );
};

export default Footer;
