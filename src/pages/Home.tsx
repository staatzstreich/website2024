import { FC, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Box, Paper, Stack } from "@mui/material";
import Welcome from "../components/Welcome";
import Job from "../components/Job";
import Divider from "../components/Divider";
import About from "../components/About";
import EmailButton from "../components/EmailButton";
import Footer from "../components/Footer";
import RoundedImage from "../components/RoundedImage";
import LoadImage from "../utils/LoadImage";
import spo from "../assets/st_peter_ording.jpg";

const Home: FC = () => {
  const { i18n } = useTranslation();

  useEffect(() => {
    const language = localStorage.getItem("i18n");
    if (language) {
      i18n.changeLanguage(language);
    }
  }, [i18n]);

  useEffect(() => {
    LoadImage("wallpaper");
  });

  return (
    <Box
      id="wallpaper"
      data-image={spo}
      sx={{
        backgroundSize: "cover",
        backgroundPosition: "top center",
        backgroundImage: `url(${spo})`,
        opacity: 0.92,
        minHeight: "100vh",
        minWidth: "100vw",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundImage:
            "linear-gradient(to bottom right, rgba(211, 211, 211, 0.9), rgba(211, 211, 211, 0.5));",
          color: "#fff",
          minHeight: "100vh",
        }}
      >
        <Paper
          elevation={24}
          sx={{
            backgroundColor: "#1cac0c",
            backgroundImage:
              "linear-gradient(to bottom right, rgba(28, 172, 12, 1), rgba(128, 255, 135, 1))",
            minHeight: "35vh",
            maxWidth: 850,
            p: 6,
          }}
        >
          <Stack direction={{ xs: "column-reverse", sm: "row" }}>
            <Stack>
              <Welcome />
              <Job />
              <Divider />
              <About />
              <EmailButton />
              <Footer />
            </Stack>
            <Box ml={{ sm: 2 }}>
              <RoundedImage />
            </Box>
          </Stack>
        </Paper>
      </Box>
    </Box>
  );
};

export default Home;
