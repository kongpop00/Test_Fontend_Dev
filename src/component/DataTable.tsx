import React, { useState } from "react";
import { Button, Checkbox, Flex, Table } from "antd";
import type { TableColumnsType } from "antd";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteUser,
  userSelector,
  deleteUserAll,
  deleteUserSelect,
} from "../store/slices/userSlice";
import type { CheckboxProps } from "antd";
import { useTranslation } from "react-i18next";
import { useNavigate } from 'react-router-dom';
interface DataType {
  key: React.Key;
  id: number;
  name: string;
  gender: string;
  phone: string;
  nationality: string;

}


const DataTable = () => {
   const usersReducer = useSelector(userSelector);
 
  const navigate = useNavigate();
  const [checkAll, setCheckAll] = useState<boolean>(false);
  const [selectedRows, setSelectedRows] = useState<any[]>([]);
 

  const dispatch = useDispatch();
  const {t } =useTranslation(['th' ,'en'])
  const onDeleteUser = (record: any) => {
    dispatch(deleteUser({ id: record.id }));
  };


  const onEdit =(record:any)=>{
   console.log(record.id);
   navigate(`/edit/${record.id}`)
   
  }
  const columns: TableColumnsType<DataType> = [
    {
      title:`${t("name", {ns:['th' , 'en']})}`,
      dataIndex: "name",
      key: "name",
      sorter: (a, b) => b.name.localeCompare(a.name),
    },
    {
      title: `${t("sex", {ns:['th' , 'en']})}`,
      dataIndex: "gender",
      sorter: (a, b) => b.gender.localeCompare(a.gender),
    },
    {
      title:  `${t("phone", {ns:['th' , 'en']})}`,
      dataIndex: "phone",
      sorter: (a, b) => b.phone.localeCompare(a.phone),
    },
    {
      title:  `${t("nationlity", {ns:['th' , 'en']})}`,
      dataIndex: "nationality",
      sorter: (a, b) => b.nationality.localeCompare(a.nationality),
    },
    {
      title:  `${t("action", {ns:['th' , 'en']})}`,
      key: " action",
      render: (record: number ) => (
        <div>
           <Button  style={{backgroundColor:"#1677ff", fontSize:"15px" ,color:"white", marginRight:"10px"}} onClick={()=>onEdit(record)} > {t("Edit", {ns:['th' , 'en']})}</Button>
           <Button style={{backgroundColor:"#e04a3a", fontSize:"15px" ,color:"white"}} onClick={() => onDeleteUser(record)}> {t("delete", {ns:['th' , 'en']})}</Button>
        </div>
       
      ),
    },
    
  ];

  const rowSelection = {
    onChange: (selectedRowKeys: React.Key[], selectedRows: DataType[]) => {
      console.log(
        `selectedRowKeys: ${selectedRowKeys}`,
        "selectedRows: ",
        selectedRows
      );

      setSelectedRows(selectedRows);
      console.log("dasdasd", selectedRows);
    },
    getCheckboxProps: (record: DataType) => ({
      disabled: record.name === "Disabled User", // Column configuration not to be checked
      name: record.name,
    }),
  };
  
 
  
  const users: any[] = usersReducer.map((e:any) => {
    return {
      key:e.id,
      id: e.id,
      name: e.name,
      gender:`${t(e.gender, {ns:['th' , 'en']})}` ,
      phone: e.phone,
      nationality: `${t(e.nationality, {ns:['th' , 'en']})}`,
    };
 
  });

  const onChangeDeleteAll: CheckboxProps["onChange"] = (e) => {
    const check = e.target.checked;
    setCheckAll(check);
  };
  const handledeleteAll = () => {
    if (checkAll) {
      return dispatch(deleteUserAll({ checkAll: checkAll }));
    } else {
      return dispatch(deleteUserSelect({ select: selectedRows }));
    }
  };
 
  return (
    <Flex
      align="start"
      style={{  width:"100%",  }}
      vertical={true}
    >
      <Flex align="center">
        <Checkbox style={{ width: "100%" }} onChange={onChangeDeleteAll}>
        {t("selectall", {ns:['th' , 'en']})}
        </Checkbox>
        <Button onClick={handledeleteAll}>  {t("delete", {ns:['th' , 'en']})}</Button>
      </Flex>

      <Table
        style={{ width: "100%", marginTop: "20px", height:"500px"}}
        rowSelection={rowSelection}
        dataSource={users}
        pagination={{ pageSize: 4 }}
        columns={columns}
      />
     
    </Flex>
  );
};

export default DataTable;
