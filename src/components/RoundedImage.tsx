import { FC, useEffect } from "react";
import { styled } from "@mui/material";
import { useTranslation } from "react-i18next";
import michael from "../assets/michael.jpg";
import michaelx2 from "../assets/michael@2x.jpg";
import michaelx3 from "../assets/michael@3x.jpg";
import LoadImage from "../utils/LoadImage";

const StyledRoundedImage = styled("img")({
  borderRadius: "220667px",
  boxShadow: "0px 20px 5px rgba(0, 0, 0, 0.1)",
  width: "320px",
  height: "320px",
});

const RoundedImage: FC = () => {
  const { t } = useTranslation();

  useEffect(() => {
    LoadImage("pictureImage");
  });

  return (
    <StyledRoundedImage
      id="pictureImage"
      src={michael}
      srcSet={`${michael}, ${michaelx2} x2, ${michaelx3} x3`}
      alt={t("ImageDescription")}
    />
  );
};

export default RoundedImage;
