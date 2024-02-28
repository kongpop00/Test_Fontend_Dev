import { Card, Flex } from "antd";
import FormContent from "../component/form/FormMain";
import DataTable from "../component/DataTable";
import NavTest_3 from "../component/NavTest_3";

const Test_3 = () => {
  return (
    <div className="viewblackground" style={{ height: "100%",paddingInline:"120px" }}>
      <NavTest_3  />
      <Flex
        vertical={true}
        align="center"
        justify="center"
        style={{ width: "100%", height: "500px" }}
      >
        <Card
          style={{
            width: 950,
            height: 430,
            backgroundColor: "transparent",
            borderColor: "black",
            marginBottom:"70px"
          }}
        >
          <FormContent />
        </Card>
      </Flex>

      <div
        style={{
       
          width: "80%",
          height: "100%",
          margin: "auto",
        }}
      >
        <DataTable />
      </div>
    </div>
  );
};

export default Test_3;
