import {
  Button,
  DatePicker,
  DatePickerProps,
  Flex,
  Form,
  Input,
  Radio,
  RadioChangeEvent,
  Select,
} from "antd";
import nationality_TH from "./nationlity_TH.json";
import codephone from "./codephone.json";
import {  useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser, userSelector } from "../../store/slices/userSlice";
import { useTranslation } from "react-i18next";



const FormContent = () => {
  const dispatch = useDispatch();
  //state
  const [prefix, setprefix] = useState<string>("");
  const [name, setname] = useState<string>("");
  const [lastname, setLastName] = useState<string>("");
  const [birth, setBirth] = useState<{}>("");
  const [nationality, setNationality] = useState<string>("");
  const [idcard, _setiDcard] = useState<string>("");
  const [gender, setiGender] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [passport, setPassport] = useState<string>("");
  const [saraly, setSaraly] = useState<string>("");
  const [prefixPhone, setprefixphone] = useState<string>("");

 
 

  const usersReducer = useSelector(userSelector);

  const [form] = Form.useForm();
  const onFinish = (): void => {
    dispatch(
      addUser({
        id: usersReducer.length + 1,
        prefix: prefix,
        name: name,
        lastname: lastname,
        birth: birth,
        nationality: nationality,
        idCard: idcard,
        phone: phone,
        gerder: gender,
        passport: passport,
        slary: saraly,
      })
    );

    
  };
  
  const handChangPrefix = (value: string) => {
    setprefix(value);
  };

  const dateFormat = "MM/DD/YYYY";
  const onChangebirth: DatePickerProps["onChange"] = (_date, dateString) => {
    setBirth(dateString);
  };

  const handleChangeNationality = (e:any) => {
    setNationality(e.value);
    return e.value;
  };
  const handlepprefixhone = (value:any) => {
    setprefixphone(value.value )
    
    
  };

const  onChangePhone =(e:React.ChangeEvent<HTMLInputElement>)=>{
  if(e.target.value.length >9){
    const phone = e.target.value
    const deleteZero = phone.substring(1,10)
    console.log(deleteZero);
    setPhone(`${prefixPhone}  ${deleteZero}`)
  }else{
    setPhone(`${prefixPhone}  ${e.target.value}`)
  }
   
     
}




  const onChangeGender = (e: RadioChangeEvent) => {
    console.log("radio checked", e.target.value);
    setiGender(e.target.value);
  };
const {t } =useTranslation(['th' ,'en'])
  return (
    <div>
      <Form form={form} name="control-hooks" onFinish={onFinish}>
        <Flex justify="start">
          {/**--------------- --------prefix-------------------------- */}

          <Form.Item
            name="prefix"
            label={t("prefix", {ns:['th' , 'en']})}
            rules={[{ required: true, message: "กรุณาเลือกคำนำหน้า" }]}
          >
            <Select
              placeholder={t("prefix", {ns:['th' , 'en']})}
              style={{ width: 80, marginLeft: 10 }}
              onChange={handChangPrefix}
              options={[
                {
                  value: "นาย",
                  label: `${ t("prefix1", {ns:['th' , 'en']})  }`
                },
                {
                  value: "นาง",
                  label: `${ t("prefix3", {ns:['th' , 'en']})  }`
                },
                {
                  value: "นางสาว",
                  label: `${ t("prefix2", {ns:['th' , 'en']})  }`
                },
              ]}
            />
          </Form.Item>
          {/**----------------------------- name-------------------------- */}
          <Form.Item
            name="name"
            label={t("name", {ns:['th' , 'en']})}
            rules={[{ required: true, message: "กรุณากรอกชื่อ" }]}
            style={{ marginLeft: 20 }}
          >
            <Input
              onChange={(e) => setname(e.target.value)}
              style={{ width: 250, marginLeft: 0 }}
            />
          </Form.Item>

          {/**----------------------------lastname--------------------------- */}
          <Form.Item
            name="lastname"
            label={t("lastname", {ns:['th' , 'en']})}
            rules={[{ required: true, message: "กรุณากรอกนามสกุล" }]}
            style={{ marginLeft: 20 }}
          >
            <Input
              onChange={(e) => setLastName(e.target.value)}
              style={{ width: 250, marginLeft: 0 }}
            />
          </Form.Item>
        </Flex>

        <Flex justify="start">
          {/**---------------------birth---------------------- */}

          <Form.Item
            name="birth"
            label={t("birth", {ns:['th' , 'en']})}
            rules={[{ required: true, message: "กรุุณาระบุ วันเกิด" }]}
          >
            <DatePicker
              placeholder={t("birthplaceholder", {ns:['th' , 'en']})}
              format={dateFormat}
              onChange={onChangebirth}
            />
          </Form.Item>
          {/**----------------------- nationality-------------------------- */}

          <Form.Item
            name="์nationality"
            label={t("nationlity", {ns:['th' , 'en']})}
            rules={[{ required: true, message: "กรุณาเลือกสัญชาติ" }]}
            style={{ marginLeft: 20 }}
          >
            <Select
              labelInValue
              placeholder={t("Pleaseselect", {ns:['th' , 'en']})}
              style={{ width: 250, marginLeft: 0 }}
              onChange={handleChangeNationality}
            >
              {nationality_TH.map((item, index) => {
                return (
                  <option key={`type-key=${index}`} value={item} >
                 {item}
                  </option>
                );
              })}
            </Select>
          </Form.Item>
        </Flex>

        <Flex justify="start">
          {/**--------------------- id Card---------------------- */}

          <Form.Item
            name="idNumber"
            label={t("idCard", {ns:['th' , 'en']})}
            rules={[{ required: true, message: "กรุุณาระบุ เลขบัตรประชาชน" }]}
          >
            <Flex style={{width:"500px"}} justify="space-around">
            <Input maxLength={1} style={{width:"50px", textAlign:"center"}}></Input>
            <label style={{fontSize:"22px"}}>-</label>
            <Input  maxLength={4} style={{width:"100px",textAlign:"center" }}></Input>
           <label  style={{fontSize:"22px"}}>-</label>
           <Input  maxLength={5} style={{width:"100px",textAlign:"center" }}></Input>
           <label style={{fontSize:"22px"}}>-</label>
           <Input maxLength={2} style={{width:"80px",textAlign:"center" }}></Input>
           <label style={{fontSize:"22px"}}>-</label>
           <Input maxLength={1} style={{width:"50px",textAlign:"center" }}></Input>
           </Flex>
          </Form.Item>
        </Flex>

        <Flex justify="start">
          {/**--------------------- gender---------------------- */}

          <Form.Item
            name="gender"
            label={t("sex", {ns:['th' , 'en']})}
            rules={[{ required: true, message: "กรุุณาระบุเพศ" }]}
          >
            <Radio.Group onChange={onChangeGender} value={gender}>
              <Radio value={"ผู้ชาย"}>{t("male", {ns:['th' , 'en']})}</Radio>
              <Radio value={"female"}>{t("sex", {ns:['th' , 'en']})}</Radio>
              <Radio value={"ไม่ระบุ"}>{t("notgender", {ns:['th' , 'en']})}</Radio>
            </Radio.Group>
          </Form.Item>
        </Flex>

        <Flex justify="start">
          {/**---------------------phone---------------------- */}

          <Form.Item
            name="idNumber"
            label={t("phone", {ns:['th' , 'en']})}
            rules={[{ required: true, message: "กรุุณากรอกเบอร์โทร" }]}
          >
            <Flex>
              <Select
                labelInValue
                defaultValue={"+66"}
                style={{ width: 90, marginLeft: 0 }}
                onChange={ handlepprefixhone}
              >
                {codephone.map((item, index) => {
                  return (
                    <option key={`type-key=${index}`} value={item}>
                      {item}
                    </option>
                  );
                })}
              </Select>

              <span>-</span>
              <Input
              maxLength={10}
                onChange={onChangePhone}
                style={{ width: 200, marginLeft: 20 }}
              />
            </Flex>
          </Form.Item>
        </Flex>

        {/**-------------------------passport---------------------------- */}
        <div>
          <Form.Item name="passport" label={t("passport", {ns:['th' , 'en']})}>
            <Input
              onChange={(e) => setPassport(e.target.value)}
              style={{ width: 250 }}
            />
          </Form.Item>
        </div>

        <Flex justify="space-between">
          {/**--------------------- saraly---------------------- */}

          <Form.Item
            name="saraly"
            label={t("salary", {ns:['th' , 'en']})}
            rules={[
              { required: true, message: "กรุุณาระบุ เงินเดือนที่คาดหวัง" },
            ]}
          >
            <Input
              onChange={(e) => setSaraly(e.target.value)}
              style={{ width: 220 }}
            />
          </Form.Item>
          {/**-----------------------button--------------------------- */}
          <div style={{ marginRight: 200 }}>
            <Button htmlType="reset" style={{ marginRight: 40 }}>
            {t("reset", {ns:['th' , 'en']})}
            </Button>
            <Button htmlType="submit">  {t("send", {ns:['th' , 'en']})}</Button>
          </div>
        </Flex>
      </Form>
    </div>
  );
};

export default FormContent;
