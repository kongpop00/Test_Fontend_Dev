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

import nationality_en from "../component/form/nationality .json";
import codephone from "../component/form/codephone.json";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userSelector, EditUser } from "../store/slices/userSlice";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
dayjs.extend(customParseFormat);
import { useNavigate } from "react-router-dom";
import NavTest_3 from "../component/NavTest_3";

const Edit = () => {
  const { id }: any = useParams();
  const dispatch = useDispatch();
  const usersReducer = useSelector(userSelector);
  const existingUser = usersReducer.filter((f) => f.id == id);
  const {
    prefix,
    name,
    lastname,
    birth,
    nationality,
    gender,
    phone,
    passport,
    salary,
    prefixPhone,
    idCard,
  } = existingUser[0];
  //state
  const [eprefix, setprefix] = useState<string>(prefix);
  const [ename, setname] = useState<string>(name);
  const [elastname, setLastName] = useState<string>(lastname);
  const [ebirth, setBirth] = useState<any>(birth);
  const [enationality, setNationality] = useState<string>(nationality);
  const [egender, setiGender] = useState<string>(gender);
  const [ephone, setPhone] = useState<string>(phone);
  const [epassport, setPassport] = useState<string>(passport);
  const [esalary, setSaraly] = useState<string>(salary);
  const [eprefixPhone, setprefixphone] = useState<string>(prefixPhone);
  const [eidCard1, setiDcard1] = useState<string>(idCard.slice(0, 1));
  const [eidCard2, setiDcard2] = useState<string>(idCard.slice(1, 5));
  const [eidCard3, setiDcard3] = useState<string>(idCard.slice(5, 10));
  const [eidCard4, setiDcard4] = useState<string>(idCard.slice(10, 12));
  const [eidCard5, setiDcard5] = useState<string>(idCard.slice(12, 13));

  const [idcard, _setCard] = useState(idCard);
  const { t } = useTranslation(["th", "en"]);
  const navigate = useNavigate();

  const [form] = Form.useForm();
  const onEdit = (even: any) => {
    even.preventDefault();
    if (ename === "") {
      alert(`${t("Pleaseenteryourname", { ns: ["th", "en"] })} `);
    } else if (elastname === "") {
      alert(`${t("PleaseenteryourLast", { ns: ["th", "en"] })} `);
    } else if (eidCard1 === "") {
      alert(`${t("PleaseenterIdCard", { ns: ["th", "en"] })} `);
    } else if (eidCard2 === "") {
      alert(`${t("PleaseenterIdCard", { ns: ["th", "en"] })} `);
    } else if (eidCard3 === "") {
      alert(`${t("PleaseenterIdCard", { ns: ["th", "en"] })} `);
    } else if (eidCard4 === "") {
      alert(`${t("PleaseenterIdCard", { ns: ["th", "en"] })} `);
    } else if (eidCard5 === "") {
      alert(`${t("PleaseenterIdCard", { ns: ["th", "en"] })} `);
    } else if (ephone === "") {
      alert(`${t("PleaseenterPhone", { ns: ["th", "en"] })} `);
    } else if (esalary === "") {
      alert(`${t("PleaseenterSalary", { ns: ["th", "en"] })} `);
    } else {
      dispatch(
        EditUser({
          id: id,
          prefix: eprefix,
          name: ename,
          lastname: elastname,
          birth: ebirth,
          nationality : enationality,
          idCard: eidCard1 + eidCard2 + eidCard3 + eidCard4 + eidCard5,
          phone: ephone,
          prefixPhone: eprefixPhone,
          gender: egender,
          passport: epassport,
          salary: esalary,
        })
      );
      navigate("/test3");
    }
  };

  const handChangPrefix = (value: string) => {
    setprefix(value);
    console.log(value);
  };

  const dateFormat = "MM/DD/YYYY";
  const onChangebirth: DatePickerProps["onChange"] = (date) => {
    setBirth(date);
  };

  const handleChangenationality = (e: any) => {
    setNationality(e.value);

  };
  const handlepprefixhone = (e: any) => {
    setprefixphone(e.value);
  };

  const onChangePhone = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length > 9) {
      const phone = e.target.value;
      const deleteZero = phone.substring(1, 10);
      console.log(deleteZero);
      setPhone(`${prefixPhone}  ${deleteZero}`);
    } else {
      setPhone(`${prefixPhone}  ${e.target.value}`);
    }
  };

  const onChangeGender = (e: RadioChangeEvent) => {
    console.log("radio checked", e.target.value);
    setiGender(e.target.value);
  };
  const onCancel = () => {
    navigate("/test3");
  };

  return (
    <Flex
      className="viewblackground"
      style={{ width: "100%", height: "100vh" }}
      justify="center"
      align="center"
      vertical={true}
    >
      <div style={{ width: "80%", marginBottom: "100px" }}>
        <NavTest_3 />
      </div>

      <Form
        form={form}
        name="control-hooks"
        style={{
          padding: "100px",
          border: "solid gray 1px",
          marginBottom: "20px",
          borderRadius: "20px",
        }}
      >
        <Flex justify="start">
          {/**--------------- --------prefix-------------------------- */}

          <Form.Item name="prefix" label={t("prefix", { ns: ["th", "en"] })}>
            <Select
              defaultValue={eprefix}
              style={{ width: 80, marginLeft: 10 }}
              onChange={handChangPrefix}
              value={eprefix}
              options={[
                {
                  value: `${t("prefix1", { ns: ["th", "en"] })}`,
                  label: `${t("prefix1", { ns: ["th", "en"] })}`,
                },
                {
                  value: `${t("prefix2", { ns: ["th", "en"] })}`,
                  label: `${t("prefix3", { ns: ["th", "en"] })}`,
                },
                {
                  value: `${t("prefix3", { ns: ["th", "en"] })}`,
                  label: `${t("prefix2", { ns: ["th", "en"] })}`,
                },
              ]}
            />
          </Form.Item>
          {/**----------------------------- name-------------------------- */}
          <Form.Item
            name="name"
            label={t("name", { ns: ["th", "en"] })}
            style={{ marginLeft: 20 }}
          >
            <Input
              defaultValue={ename}
              onChange={(e) => setname(e.target.value)}
              style={{ width: 250, marginLeft: 0 }}
            />
          </Form.Item>

          {/**----------------------------lastname--------------------------- */}
          <Form.Item
            name="lastname"
            label={t("lastname", { ns: ["th", "en"] })}
            style={{ marginLeft: 20 }}
          >
            <Input
              defaultValue={elastname}
              onChange={(e) => setLastName(e.target.value)}
              style={{ width: 250, marginLeft: 0 }}
            />
          </Form.Item>
        </Flex>

        <Flex justify="start">
          {/**---------------------birth---------------------- */}

          <Form.Item name="birth" label={t("birth", { ns: ["th", "en"] })}>
            <DatePicker
              defaultValue={dayjs(`${ebirth}`)}
              placeholder={t("birthplaceholder", { ns: ["th", "en"] })}
              format={dateFormat}
              onChange={onChangebirth}
            />
          </Form.Item>
          {/**----------------------- nationality-------------------------- */}

          <Form.Item
            name="nationality"
            label={t("nationality", { ns: ["th", "en"] })}
            style={{ marginLeft: 20 }}
          >
          <Select
              labelInValue
              defaultValue={t(enationality, { ns: ["th", "en"] })}
              placeholder={t("Pleaseselect", { ns: ["th", "en"] })}
              style={{ width: 250, marginLeft: 0 }}
              onChange={handleChangenationality}
            >
              {nationality_en.map((nationality, index) => {
                return (
                  <option key={`type-key=${index}`} value={nationality}>
                   {t(nationality, { ns: ["th", "en"] })}
                  </option>
                );
              })}
            </Select>
          </Form.Item>
        </Flex>

        <Flex justify="start">
          {/**--------------------- id Card---------------------- */}

          <Form.Item name="idNumber" label={t("idCard", { ns: ["th", "en"] })}>
            <Flex style={{ width: "500px" }} justify="space-around">
              <Input
                defaultValue={idcard.slice(0, 1)}
                onChange={(e) => setiDcard1(e.target.value)}
                maxLength={1}
                style={{ width: "50px", textAlign: "center" }}
              ></Input>

              <label style={{ fontSize: "22px" }}>-</label>

              <Input
                defaultValue={idcard.slice(1, 5)}
                onChange={(e) => setiDcard2(e.target.value)}
                maxLength={4}
                style={{ width: "100px", textAlign: "center" }}
              ></Input>

              <label style={{ fontSize: "22px" }}>-</label>
              <Input
                defaultValue={idcard.slice(5, 10)}
                onChange={(e) => setiDcard3(e.target.value)}
                maxLength={5}
                style={{ width: "100px", textAlign: "center" }}
              ></Input>

              <label style={{ fontSize: "22px" }}>-</label>

              <Input
                defaultValue={idcard.slice(10, 12)}
                onChange={(e) => setiDcard4(e.target.value)}
                maxLength={2}
                style={{ width: "80px", textAlign: "center" }}
              ></Input>

              <label style={{ fontSize: "22px" }}>-</label>
              <Input
                defaultValue={idcard.slice(12, 13)}
                onChange={(e) => setiDcard5(e.target.value)}
                maxLength={1}
                style={{ width: "50px", textAlign: "center" }}
              ></Input>
            </Flex>
          </Form.Item>
        </Flex>

        <Flex justify="start">
          {/**--------------------- gender---------------------- */}

          <Form.Item name="gender">
            <Radio.Group onChange={onChangeGender} defaultValue={egender}>
              <Radio value={"male"}>{t("male", { ns: ["th", "en"] })}</Radio>
              <Radio value={"female"}>
                {t("female", { ns: ["th", "en"] })}
              </Radio>
              <Radio value={"notgender"}>
                {" "}
                {t("notgender", { ns: ["th", "en"] })}
              </Radio>
            </Radio.Group>
          </Form.Item>
        </Flex>

        <Flex justify="start">
          {/**---------------------phone---------------------- */}

          <Form.Item name="idNumber" label={t("phone", { ns: ["th", "en"] })}>
            <Flex>
              <Select
                labelInValue
                defaultValue={eprefixPhone}
                style={{ width: 90, marginLeft: 0 }}
                onChange={handlepprefixhone}
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
                defaultValue={ephone.slice(5 - 1)}
                maxLength={10}
                onChange={onChangePhone}
                style={{ width: 200, marginLeft: 20 }}
              />
            </Flex>
          </Form.Item>
        </Flex>

        {/**-------------------------passport---------------------------- */}
        <div>
          <Form.Item
            name="passport"
            label={t("passport", { ns: ["th", "en"] })}
          >
            <Input
              defaultValue={epassport}
              onChange={(e) => setPassport(e.target.value)}
              style={{ width: 250 }}
            />
          </Form.Item>
        </div>

        <Flex justify="space-between">
          {/**--------------------- saraly---------------------- */}

          <Form.Item name="saraly" label={t("salary", { ns: ["th", "en"] })}>
            <Input
              defaultValue={esalary}
              onChange={(e) => setSaraly(e.target.value)}
              style={{ width: 220 }}
            />
          </Form.Item>
          {/**-----------------------button--------------------------- */}
          <div style={{ marginRight: 200 }}>
            <Button onClick={onCancel} style={{ margin: "10px" }}>
              {t("Cancel", { ns: ["th", "en"] })}
            </Button>
            <Button onClick={onEdit}>
              {t("Update", { ns: ["th", "en"] })}
            </Button>
          </div>
        </Flex>
      </Form>
    </Flex>
  );
};

export default Edit;
