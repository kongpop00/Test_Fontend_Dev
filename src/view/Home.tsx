import { Card, Flex, Select } from "antd";

import { useTranslation } from "react-i18next";

import { useNavigate } from "react-router-dom";
const Home = () => {
  interface datatype {
    title: String;
    sunTitle: String;
    link: String;
  }
  const { t, i18n } = useTranslation(["th", "en"]);

  const datatypes: datatype[] = [
    {
      title: `${t("test1", { ns: ["th", "en"] })}`,
      sunTitle: `${t("subTitle1", { ns: ["th", "en"] })}`,
      link: "/test1",
    },
    {
      title: `${t("test2", { ns: ["th", "en"] })}`,
      sunTitle: `${t("subTitle2", { ns: ["th", "en"] })}`,
      link: "/*",
    },
    {
      title: `${t("test3", { ns: ["th", "en"] })}`,
      sunTitle: `${t("subTitle3", { ns: ["th", "en"] })}`,
      link: "/test3",
    },
  ];
  const handleChangeLanguage = (value: string) => {
    const language = value;
    i18n.changeLanguage(language);
    console.log(value);
  };
  const navigate = useNavigate();

  const handleNavigate = (link: any) => {
    console.log("data", link);

    navigate(`${link}`);
    window.location.reload();
  };
  return (
    <Flex
      className="viewblackground"
      style={{ width: "100%", height: "100vh " }}
      justify="center"
      align="center"
      gap={30}
    >
      {datatypes.map((datatype, index) => {
        return (
          <Card
            key={index}
            hoverable
            onClick={() => handleNavigate(datatype.link)}
            title={datatype.title}
            style={{ width: 300 }}
          >
            <p>{datatype.sunTitle}</p>
          </Card>
        );
      })}
      <Select
        defaultValue="EN"
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
            label: "EN",
            value: "en",
          },
          {
            label: "TH",
            value: "th",
          },
        ]}
      />
    </Flex>
  );
};

export default Home;
