import { FC } from "react";
import { styled } from "@mui/material";
import { useTranslation } from "react-i18next";
import michael from "../assets/michael.jpg";
import michael2x from "../assets/michael@2x.jpg";
import michael3x from "../assets/michael@3x.jpg";

const StyledRoundedImage = styled("img")({
  borderRadius: "220667px",
  boxShadow: "0px 20px 5px rgba(0, 0, 0, 0.1)",
  width: "320px",
  height: "320px",
});

const RoundedImage: FC = () => {
  const { t } = useTranslation();

  return (
    <StyledRoundedImage
      id="pictureImage"
      src={michael}
      srcSet={`${michael}, ${michael2x} 2x, ${michael3x} 3x`}
      alt={t("ImageDescription")}
    />
  );
};

export default RoundedImage;
