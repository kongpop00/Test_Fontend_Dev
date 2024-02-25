import { Flex, Select } from 'antd'
import React from 'react'

const Nav = () => {
    const handleChange = (value: string) => {
        console.log(`selected ${value}`);
      };
  return (
    <Flex style={{width :"100%", height:"60px",  padding:"20px"}}
    align='center'
    justify='space-between'
    >
     <h1 style={{fontSize:"55px"}}>Layouy & Style</h1>
    
     <Select
    defaultValue="EN"
    style={{ width: 80,  height:"50px"}}
    onChange={handleChange}
    options={[
      {
        label: 'EN',
       value: "EN"
      },
      {
        label: 'TH',
       value: "TH"
      }

    ]}
  />
    </Flex>
  )
}

export default Nav
