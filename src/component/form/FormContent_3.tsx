import { Flex, Form, Input, Radio, RadioChangeEvent, Select,Space  } from "antd";
import  { useState } from "react";

const FormContent_3 = () => {
    const [value, setValue] = useState(1);

    const onChange = (e: RadioChangeEvent) => {
      console.log('radio checked', e.target.value);
      setValue(e.target.value);
    };
  return (
    <div>
      <Flex justify="start">
        {/**--------------------- id Card---------------------- */}

        <Form.Item
          name="idNumber"
          label="เลขบัตรประชาชน"
          rules={[
            { required: true, message: "กรุุณาระบุ เลขบัตรประชาชน" },
          ]}
        >
          <Input style={{ width: 50, marginLeft: 0 }} maxLength={3} />
          <Input style={{ width: 100, marginLeft: 0 }} maxLength={4} />
        </Form.Item>
      </Flex>

      <Flex justify="start">
        {/**--------------------- gender---------------------- */}

        <Form.Item
          name="idNumber"
          label="เพศ"
          rules={[
            { required: true, message: "กรุุณาระบุเพศ" },
          ]}
        >
          <Radio.Group onChange={onChange} value={value}>
            <Radio value={1}>ผู้ชาย</Radio>
            <Radio value={2}>ผู้หญิง</Radio>
            <Radio value={3}>ไม่ระบุ</Radio>
            
          </Radio.Group>
        </Form.Item>
      </Flex>
    
      <Flex 
      justify="start">
        {/**---------------------phone---------------------- */}

        <Form.Item
          name="idNumber"
          label="เบอร์โทร"
          rules={[
            { required: true, message: "กรุุณาระบุเพศ" },
          ]}
        >
      <Flex>
      <Select  style={{width:90, marginRight:10}}/>
      <span>-</span>
      <Input    style={{width:200, marginLeft:20}} />
      </Flex>  
     




        </Form.Item>
      </Flex>


      {/**-------------------------passport---------------------------- */}
      <div>
        <Form.Item name="passport" label="หนังสือเดินทาง">
          <Input style={{ width: 250 }} />
        </Form.Item>
      </div>
    </div>
  );
};
export default FormContent_3;
