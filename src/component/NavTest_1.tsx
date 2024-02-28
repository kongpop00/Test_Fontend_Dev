import { Flex, Select } from 'antd'
import { useTranslation } from 'react-i18next'


const NavTest_1 = () => {

  const {t , i18n} =useTranslation(['th' ,'en'])

    const handleChange = (value: string) => {
       // console.log(`selected ${value}`);
        const language = value
        i18n.changeLanguage(language)

      };
  return (
    <Flex style={{width :"100%", height:"60px",  padding:"20px"}}
    align='center'
    justify='space-between'
    >
     <h3 style={{fontSize:"55px" ,fontWeight:500}}>{t("navLayout", {ns:['en' , 'th']})}</h3>
    
     <Select
    defaultValue="EN"
    style={{ width: 80,  height:"50px"}}
    onChange={handleChange}
    options={[
      {
      label: 'EN',
       value: "en"
      },
      {
        label: 'TH',
       value: "th"
      }

    ]}
  />
    </Flex>
  )
}

export default  NavTest_1
