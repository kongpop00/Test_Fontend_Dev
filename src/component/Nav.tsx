import { Flex, Select } from 'antd'
import { useTranslation } from 'react-i18next'


const Nav = () => {

  const {t , i18n} =useTranslation(['home' ,'main'])

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
     <h1 style={{fontSize:"55px"}}>{t("navLayout", {ns:['main ' , 'home']})}</h1>
    
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

export default Nav
