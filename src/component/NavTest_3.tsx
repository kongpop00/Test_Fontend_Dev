import { Button, Flex, Select } from "antd";

import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const NavTest_3 = () => {
  const { t, i18n } = useTranslation(["th", "en"]);

  const handleChangeLanguage = (value: string) => {
    const language = value;
    i18n.changeLanguage(language);
  };

  return (
    <Flex
      style={{
        width: "100%",
        height: "80px",
        padding: "20px",
        position: "relative",
        paddingTop: "60px",
      }}
      align="end"
      justify="space-between"
    >
      <h3 style={{ fontSize: "55px", fontWeight: 500 }}>
        {t("MnageForms", { ns: ["th", "en"] })}
      </h3>

      <Flex vertical={true} gap={20}>
        <Select
          defaultValue={"English"}
          style={{ width: 100, height: "50px" }}
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
        <Link to="/">
          <Button style={{ height: "40px" }}>
            {t("btnHome", { ns: ["th", "en"] })}
          </Button>
        </Link>
      </Flex>
    </Flex>
  );
};

export default NavTest_3;
