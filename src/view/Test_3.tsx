import { Card, Flex} from "antd"
import FormContent from "../component/form/FormMain"
import Nav from "../component/Nav"
import DataTable from "../component/DataTable"




const Test_3 = () => {
  return (
    <div className="viewblackground">
      <Nav/>
      <Flex
      vertical={true}
      align="center"
      justify="center"
      style={{width:"100%", height:"500px"}}
      >
      <Card
        style={{
          width: 950,
          height: 430,
          backgroundColor: "transparent",
          borderColor: "black",
          marginTop:"120px"
        }}
      >
       <FormContent/>
      



      </Card>
      </Flex>
      <div style={{height:"400px", width:"80%",  marginTop:"100px", margin:"auto",}}>
      <DataTable/>
      </div>
   
    </div>
  )
}

export default Test_3
    