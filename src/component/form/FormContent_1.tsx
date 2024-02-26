import { Flex, Form, Input, Select } from 'antd';


const FormContent_1 = () => {
  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };
  
   
  return (
    <div>
       <Flex
        justify="start"
        >
        {/**--------------- --------prefix-------------------------- */}
          
          
          <Form.Item name="prefix" label="คำนำหน้า"  rules={[{ required: true, message: 'กรุณาเลือกคำนำหน้า' }]}>
          <Select
            labelInValue
            placeholder="คำ... "
            
            style={{ width: 80, marginLeft:10 }}
            onChange={handleChange}
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
            </Form.Item>
        {/**----------------------------- name-------------------------- */}
        <Form.Item name="name" label="ชื่อ"  rules={[{ required: true, message: 'กรุณากรอกชื่อ' }]} style={{marginLeft:20}}>
        <Input style={{width:250, marginLeft:0}}  />
        </Form.Item>
       
       
        {/**----------------------------lastname--------------------------- */}
        <Form.Item name="lastname" label="นามสกุล"  rules={[{ required: true, message: 'กรุณากรอกนามสกุล' }]} style={{marginLeft:20}}>
        <Input style={{width:250, marginLeft:0}} />
        </Form.Item>

        </Flex>
    </div>
  )
}

export default FormContent_1
