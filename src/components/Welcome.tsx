import { Typography } from "@mui/material";
import { FC } from "react";
import { useTranslation } from "react-i18next";

const Welcome: FC = () => {
  const { t } = useTranslation();
  return (
    <Typography
      component="h1"
      sx={{
        color: "#fff",
        fontSize: "2.225rem",
      }}
    >
      {t("WelcomeTitle")}
    </Typography>
  );
};
export default Welcome;
