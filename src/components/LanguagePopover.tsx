import { useRef, useState } from "react";
import type { FC } from "react";
import { useTranslation } from "react-i18next";
import {
  Box,
  IconButton,
  ListItemIcon,
  ListItemText,
  MenuItem,
  Popover,
  Typography,
} from "@mui/material";
import { getLanguage, SupportedLocale } from "../locales";
import { styled } from "@mui/material/styles";
import de from "../assets/flags/de.svg";
import en from "../assets/flags/en.svg";

type LanguageOption = {
  icon: string;
  label: string;
};

const languageOptions: Record<SupportedLocale, LanguageOption> = {
  en: {
    icon: `${en}`,
    label: "English",
  },
  de: {
    icon: `${de}`,
    label: "Deutsch",
  },
};

const StyledBox = styled(Box)(() => ({
  display: "flex",
  height: 35,
  width: 35,
  "& img": {
    width: "100%",
  },
}));

const LanguagePopover: FC = () => {
  const anchorRef = useRef<HTMLButtonElement | null>(null);
  const { i18n } = useTranslation();
  const [open, setOpen] = useState<boolean>(false);

  const handleOpen = (): void => {
    setOpen(true);
  };

  const handleClose = (): void => {
    setOpen(false);
  };

  const handleChangeLanguage = (language: string): void => {
    i18n.changeLanguage(language);
    setOpen(false);
    localStorage.setItem("i18n", language);
  };

  const selectedOption = languageOptions[getLanguage(i18n)];

  return (
    <>
      <IconButton onClick={handleOpen} ref={anchorRef} sx={{ p: 0 }}>
        <StyledBox>
          <img alt={selectedOption.label} src={selectedOption.icon} />
        </StyledBox>
      </IconButton>
      <Popover
        anchorEl={anchorRef.current}
        anchorOrigin={{
          horizontal: "center",
          vertical: "bottom",
        }}
        keepMounted
        onClose={handleClose}
        open={open}
        slotProps={{
          paper: {
            sx: { width: 150, color: "#1cac0c", backgroundColor: "#80ff87" },
          },
        }}
      >
        {(Object.keys(languageOptions) as SupportedLocale[]).map((language) => (
          <MenuItem
            onClick={() => handleChangeLanguage(language)}
            key={language}
          >
            <ListItemIcon>
              <StyledBox sx={{ width: 20, height: 20 }}>
                <img
                  alt={languageOptions[language].label}
                  src={languageOptions[language].icon}
                />
              </StyledBox>
            </ListItemIcon>
            <ListItemText
              primary={
                <Typography variant="subtitle2" sx={{ color: "#1cac0c" }}>
                  {languageOptions[language].label}
                </Typography>
              }
            />
          </MenuItem>
        ))}
      </Popover>
    </>
  );
};

export default LanguagePopover;
