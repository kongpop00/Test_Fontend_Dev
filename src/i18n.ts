import i18next from 'i18next';
import  en from './translation/english/en.json'
import th from './translation/thai/th.json'
import { initReactI18next } from 'react-i18next'


const resources ={
    en :{
        en : en,
        th : en,
    },
    th :{
       en : th,
       th : th,
    }
}

i18next
.use(initReactI18next)
.init({
   resources,
   lng  : "en",
});
export default i18next;