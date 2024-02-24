import { Button, Col, Flex, Row } from 'antd'
export interface Props{
    handleMove_Position : ()=>void;
    shape : string[];
    handleRandom:()=>void;
    arrayShape :number[];
    isMove_Position :boolean
}

const Test_1Style = ( { handleMove_Position , shape ,handleRandom ,arrayShape,isMove_Position} :Props) => {
  


  return (
    <Row 
    className="viewblackground"
    style={{padding:"20px", width: "auto", height: "100vh" }} justify={"center"}>
      <Flex
        className="flex"
        style={{
          height: "230px",
          marginTop:"100px",
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
            <Button className={"btn"}>
              <div className="triangle" style={{ transform: "rotate(270deg)", position:"relative"   }} />
            </Button>
            <label className="btnAbs">Move Shape</label>
          </Col>
          <Col span={12}>
            <Button onClick={handleMove_Position} className={"btn"}>
              <Flex align="end">
                <div className="triangle" />
                <div className="triangle"style={{ transform: "rotate(180deg)" }} />
              </Flex>
            </Button>
            <label className="btnAbs">Move Position</label>
          </Col>
          <Col span={6}>
            <Button className={"btn"}>
              <div
                className="triangle"
                style={{ transform: "rotate(90deg)" }}
              />
            </Button>
            <label className="btnAbs">Move Shape</label>
          </Col>
        </Row>
      </Flex>
{/**----------------------------------------------------------------------------------------- */}
      <Flex
       className="flex"
       style={{
          marginTop: "80px",
        }}
        vertical={true}
      >
        <Row
          justify={isMove_Position ? "end" : "center"}
          gutter={20}
          style={{ width: "100%", height: "200px", margin: "auto" }}
        >
          <Col span={6}>
            <Button onClick={handleRandom} className="btn"><div className={`${shape[arrayShape[0]]}`}/></Button>
          </Col>
          <Col span={6}>
            <Button onClick={handleRandom} className="btn"><div className={`${shape[arrayShape[1]]}`}/></Button>
          </Col>
          <Col span={6}>
            <Button onClick={handleRandom} className="btn"><div className={`${shape[arrayShape[2]]}`}/></Button>
          </Col>
        </Row>
      </Flex>


      <Flex
         className="flex"
        style={{
          marginBottom: "100px",
        }}
        vertical={true}
      >
        <Row
           justify={!isMove_Position ? "end" : "center"}
          gutter={20}
          style={{ width: "100%", height: "200px", margin: "auto" }}
        >
          <Col span={6}>
            <Button onClick={handleRandom} className="btn"><div className={`${shape[arrayShape[3]]}`}/></Button>
          </Col>
          <Col span={6}>
            <Button onClick={handleRandom} className="btn"><div className={`${shape[arrayShape[4]]}`}/></Button>
          </Col>
          <Col span={6}>
            <Button onClick={handleRandom} className="btn"><div className={`${shape[arrayShape[5]]}`}/></Button>
          </Col>
        </Row>
      </Flex>
    </Row>
  )
}

export default Test_1Style
