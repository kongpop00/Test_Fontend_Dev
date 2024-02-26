import { DatePicker, Flex, Form, Input, Select } from "antd";
import nationality_TH from "../../nationlity_TH.json";

const FormContent_2 = () => {

  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };

  const dateFormat = "MM/DD/YYYY";
  return (
    <div>
      <Flex justify="start">
        {/**---------------------birth---------------------- */}

        <Form.Item
          name="birth"
          label="วันเกิด"
          
          rules={[{ required: true, message: "กรุุณาระบุ วันเกิด" }]}
        >
          <DatePicker
            placeholder="เดือน/วัน/ปี"
            format={dateFormat}
          />
        </Form.Item>
        {/**----------------------- nationality-------------------------- */}

        <Form.Item
          name="์nationality"
          label="สัญชาติ"
          rules={[{ required: true, message: "กรุณาเลือกสัญชาติ" }]}
          style={{ marginLeft: 20 }}
        >
          <Select
            labelInValue
            placeholder="--กรุณาเลือก--"
            style={{ width: 250, marginLeft: 0 }}
            onChange={handleChange}
          >
         
          
            {nationality_TH.map((item, index) => {
              return (
                <option key={`type-key=${index}`} value={item}>
                  {item}
                </option>
              );
            })}
          </Select>
        </Form.Item>
      </Flex>
    </div>
  );
};

export default FormContent_2;
