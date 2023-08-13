import { Button } from "@mui/material";
import { FC, MouseEvent } from "react";
import EmailScramble from "../utils/EmailScramble";
import { useTranslation } from "react-i18next";

const mailLinkScrambled = "znvygb:zvpunry@fgnngmfgervpu.qr";

const EmailButton: FC = () => {
  const { t } = useTranslation();
  const handleButtonClick = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    const link: HTMLAnchorElement = event.currentTarget as HTMLAnchorElement;
    const mail: HTMLAnchorElement = document.createElement(
      "a"
    ) as HTMLAnchorElement;
    mail.href = EmailScramble.decode(link.href);
    mail.click();
  };

  return (
    <Button
      href={mailLinkScrambled}
      variant="contained"
      size="large"
      sx={{
        borderRadius: 28,
        width: 200,
        height: 50,
        color: "#1cac0c",
        backgroundColor: "#80ff87",
        my: 2,
        "&:hover": {
          backgroundColor: "#fff",
        },
      }}
      onClick={handleButtonClick}
    >
      {t("ButtonText")}
    </Button>
  );
};

export default EmailButton;
