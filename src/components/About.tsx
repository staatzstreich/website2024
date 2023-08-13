import { Typography } from "@mui/material";
import { FC } from "react";
import { useTranslation } from "react-i18next";

const About: FC = () => {
  const { t } = useTranslation();
  return (
    <Typography variant="body1" sx={{ color: "#fff" }}>
      {t("About")}
    </Typography>
  );
};
export default About;
