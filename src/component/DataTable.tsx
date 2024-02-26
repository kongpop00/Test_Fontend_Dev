import React, { useState } from 'react';
import { Table } from 'antd';
import type { TableColumnsType } from 'antd';

interface DataType {
  key: React.Key;
  name: string;
  gender: string;
  phone: string;
  nationality : string;
}

const columns: TableColumnsType<DataType> = [
  {
    title: 'ชื่อ',
    dataIndex: 'name',
  },
  {
    title: 'เพศ',
    dataIndex: 'age',
  },
  {
    title: 'หมายเลขโทรศัพท์มือถือ',
    dataIndex: 'address',
  },
  {
    title: 'สัญชาติ',
    dataIndex: 'address',
  },
  {
    title : 'จัดการ',
    dataIndex: 'delete'
  }
];

const data: DataType[] = [];


const DataTable: React.FC = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
  

  const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
    console.log('selectedRowKeys changed: ', newSelectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };
 

  return (
    <div >
      
      <Table   rowSelection={rowSelection} columns={columns} dataSource={data}  />
    </div>
  );
};

export default DataTable;