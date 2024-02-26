import { Button, Flex, Form, Input, Radio, RadioChangeEvent } from "antd";
import React, { useState } from "react";

const FormContent_4 = () => {
    const [value, setValue] = useState(1);

    const onChange = (e: RadioChangeEvent) => {
      console.log('radio checked', e.target.value);
      setValue(e.target.value);
    };
  return (
    <div>
      <Flex justify="space-between"
      
      >

        {/**--------------------- saraly---------------------- */}

        <Form.Item
          name="saraly"
          label="เงินเดือนที่คาดหวัง"
          rules={[
            { required: true, message: "กรุุณาระบุ เงินเดือนที่คาดหวัง" },
          ]}
        >
          <Input style={{ width: 220}} />
         
        </Form.Item>
       {/**-----------------------button--------------------------- */}
        <div style={{marginRight:200}}>
        <Button  htmlType="reset" style={{marginRight:40}}>ล้างข้อมูล  </Button>   
        <Button  htmlType="submit"> ส่งข้อมูล </Button>
        </div>  
  
      </Flex>

      
    </div>
  );
};
export default FormContent_4;
