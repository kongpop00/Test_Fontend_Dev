import { Button, Flex, Select } from "antd";

import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const { t, i18n } = useTranslation(["th", "en"]);
  const handleChangeLanguage = (value: string) => {
    const language = value;
    i18n.changeLanguage(language);
    console.log(value);
  };
  const navigate = useNavigate();
  const handleNavigate = (): void => {
    navigate("/");
    window.location.reload();
  };

  return (
    <Flex
      justify="center"
      align="center"
      className="viewblackground"
      style={{ width: "100%", height: "100vh" }}
    >
      <Flex justify="center" align="center" vertical>
        <h1 style={{ fontSize: "72px" }}>404 NOT FOUND</h1>
        <Button style={{ width: "240px" }} onClick={handleNavigate}>
          {t("home", { ns: ["th", "en"] })}
        </Button>
      </Flex>
      <Select
        defaultValue="English"
        style={{
          width: 100,
          height: "50px",
          position: "absolute",
          top: "100px",
          right: "100px",
        }}
        onChange={handleChangeLanguage}
        options={[
          {
            label: "English",
            value: "en",
          },
          {
            label: "Thai",
            value: "th",
          },
        ]}
      />
    </Flex>
  );
};

export default NotFound;
