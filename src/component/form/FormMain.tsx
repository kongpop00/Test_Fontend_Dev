import { Form } from "antd";
import FormContent_1 from "./FormContent_1";
import FormContent_2 from "./FormContent_2";
import FormContent_3 from "./FormContent_3";
import FormContent_4 from "./FormContent_4";

const FormContent = () => {
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    console.log('Success:', values);
  };
  
  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };
  const onReset = () => {
    form.resetFields();
  };
  
  return (
    <div>
      
    <Form
     form={form}
     name="control-hooks"
     onFinish={onFinish}
     
    >
    
    <FormContent_1/>  {/**FormContent_1 have prefix , name , lastname */}
    <FormContent_2/>  {/**FormContent_2 have  birth , nationality*/}
    <FormContent_3/>  {/**FormContent_3 have  id_card ,gender, passport*/}
    <FormContent_4/>  {/**FormContent_3 have  slary btn*/}

    
          
    </Form>
      
    </div>
  );
};

export default FormContent
