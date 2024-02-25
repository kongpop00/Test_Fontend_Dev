import {  Flex, Input, Select } from "antd";

const Test_3Style_1 = () => {
  return (
    <div>
      
      
        <Flex
        justify="start"
        >
        {/**--------------- คำนำหน้า------------------------------------ */}
          <label style={{ color: "red", fontSize: "20px" }}>*</label>
          <label style={{ fontSize: "18px", marginLeft: 10 }}>คำนำหน้า:</label>
          <Select
            labelInValue
            defaultValue={{ value: "คำนำหน้า", label: "คำ..." }}
            style={{ width: 80, marginLeft:10 }}
            //onChange={handleChange}
            options={[
              {
                value: "นาย",
                label: "นาย",
              },
              {
                value: "นาง",
                label: "นาง",
              },
              {
                value: "นางสาว",
                label: "นางสาว",
              },
            ]}
          />
        {/**----------------------------- ชื่อจริง-------------------------- */}
        <label style={{ color: "red", fontSize: "20px", marginLeft:10 }}>*</label>
        <label style={{ fontSize: "18px", marginLeft: 10 }}>ชื่อจริง:</label>
        <Input style={{width:250, marginLeft:10}} />

        {/**----------------------------นามสกุล--------------------------- */}
        <label style={{ color: "red", fontSize: "20px", marginLeft:10 }}>*</label>
        <label style={{ fontSize: "18px", marginLeft: 10 }}>นามสกุล:</label>
        <Input style={{width:250, marginLeft:10}} />

        </Flex>
      
    </div>
  );
};

export default Test_3Style_1;
