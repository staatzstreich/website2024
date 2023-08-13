import { Typography } from "@mui/material";
import { FC } from "react";
import { useTranslation } from "react-i18next";

const Job: FC = () => {
  const { t } = useTranslation();
  return (
    <Typography
      component="p"
      sx={{
        color: "#f5ff80",
        textTransform: "uppercase",
        fontSize: "0.75rem",
      }}
    >
      {t("Job")}
    </Typography>
  );
};
export default Job;
