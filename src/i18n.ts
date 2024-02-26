import i18next from 'i18next';
import  en from './translation/english/en.json'
import th from './translation/thai/th.json'
import { initReactI18next } from 'react-i18next'


const resources ={
    en :{
        home : en,
        main : en,
    },
    th :{
        home : th,
        main : th,
    }
}

i18next
.use(initReactI18next)
.init({
   resources,
   lng  : "en",
});
export default i18next;