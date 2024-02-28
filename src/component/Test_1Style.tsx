import { Button, Col, Flex, Row } from "antd";
import { useTranslation } from "react-i18next";
import NavTest_1 from "./NavTest_1";

export interface Props {
  handleMove_Position: () => void;
  shape: string[];
  handleRandom: () => void;
  arrayShape: number[];
  isMove_Position: boolean;
  MoveShapeLeft: () => void;
  MoveShapeRight: () => void;
}

const Test_1Style = ({
  handleMove_Position,
  shape,
  handleRandom,
  arrayShape,
  isMove_Position,
  MoveShapeLeft,
  MoveShapeRight,
}: Props) => {
  const { t } = useTranslation(["home", "main"]);

  return (
    <div>
      <Row
        className="viewblackground"
        style={{ padding: "50px", width: "auto", height: "100vh" }}
        justify={"center"}
      >
        <NavTest_1 />
        <Flex
          className="flex"
          style={{
            marginTop: "110px",
            margin: "auto",
          }}
          vertical={true}
        >
          <Row
            justify="center"
            gutter={20}
            style={{ width: "100%", height: "200px", margin: "auto" }}
          >
            <Col span={6}>
              <Button onClick={MoveShapeLeft} className={"btn"}>
                <div
                  className="triangle"
                  style={{ transform: "rotate(270deg)", position: "relative" }}
                />
              </Button>
              <label className="btnAbs">
                {t("MoveShape", { ns: ["main ", "home"] })}
              </label>
            </Col>
            <Col span={12}>
              <Button onClick={handleMove_Position} className={"btn"}>
                <Flex align="end">
                  <div className="triangle" />
                  <div
                    className="triangle"
                    style={{ transform: "rotate(180deg)" }}
                  />
                </Flex>
              </Button>
              <label className="btnAbs">
                {t("MovePosition", { ns: ["main ", "home"] })}
              </label>
            </Col>
            <Col span={6}>
              <Button onClick={MoveShapeRight} className={"btn"}>
                <div
                  className="triangle"
                  style={{ transform: "rotate(90deg)" }}
                />
              </Button>
              <label className="btnAbs">
                {t("MoveShape", { ns: ["main ", "home"] })}
              </label>
            </Col>
          </Row>
        </Flex>
        {/**----------------------------------------------------------------------------------------- */}
        <Flex
          vertical={true}
          style={{ width: "100%", marginTop: "100px" }}
          gap={20}
          align="center"
        >
          <Flex className="flex" vertical={true}>
            <Row
              justify={isMove_Position ? "end" : "center"}
              gutter={20}
              style={{ width: "100%", height: "200px", margin: "auto" }}
            >
              <Col span={6}>
                <Button onClick={handleRandom} className="btn">
                  <div className={`${shape[arrayShape[0]]}`} />
                </Button>
              </Col>
              <Col span={6}>
                <Button onClick={handleRandom} className="btn">
                  <div className={`${shape[arrayShape[1]]}`} />
                </Button>
              </Col>
              <Col span={6}>
                <Button onClick={handleRandom} className="btn">
                  <div className={`${shape[arrayShape[2]]}`} />
                </Button>
              </Col>
            </Row>
          </Flex>

          <Flex className="flex" vertical={true}>
            <Row
              justify={!isMove_Position ? "end" : "center"}
              gutter={20}
              style={{ width: "100%", height: "200px", margin: "auto" }}
            >
              <Col span={6}>
                <Button onClick={handleRandom} className="btn">
                  <div className={`${shape[arrayShape[3]]}`} />
                </Button>
              </Col>
              <Col span={6}>
                <Button onClick={handleRandom} className="btn">
                  <div className={`${shape[arrayShape[4]]}`} />
                </Button>
              </Col>
              <Col span={6}>
                <Button onClick={handleRandom} className="btn">
                  <div className={`${shape[arrayShape[5]]}`} />
                </Button>
              </Col>
            </Row>
          </Flex>
        </Flex>
      </Row>
    </div>
  );
};

export default Test_1Style;
