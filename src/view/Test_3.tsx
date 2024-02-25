import { Card, Flex} from "antd"
import Test_3Style_1 from "../component/Test_3Style_1"
import Test_3Style_2 from "../component/Test_3Style_2"


const Test_3 = () => {
  return (
    <div className="viewblackground">
      <Flex
      vertical={true}
      align="center"
      justify="center"
      style={{width:"100%", height:"100vh"}}
      >
      <Card
        style={{
          width: 950,
          height: 400,
          backgroundColor: "transparent",
          borderColor: "black",
        }}
      >
        <Test_3Style_1/>
        <Test_3Style_2/>



      </Card>
      </Flex>
    </div>
  )
}

export default Test_3
    