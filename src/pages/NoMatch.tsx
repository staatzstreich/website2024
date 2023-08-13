import { FC, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

const NoMatch: FC = () => {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const language = localStorage.getItem("i18n");
    if (language) {
      i18n.changeLanguage(language);
    }
  }, [i18n]);

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundImage:
          "linear-gradient(to bottom right, rgba(0,0,0,0.2), rgba(0,0,0,0.3));",
        color: "#fff",
        minHeight: "100vh",
      }}
    >
      <Typography variant="h1">{t("404")}</Typography>
    </Box>
  );
};

export default NoMatch;
