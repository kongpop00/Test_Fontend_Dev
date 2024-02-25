
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './sass/main.css'
import { BrowserRouter } from 'react-router-dom'


//import store from './store/store.ts';
ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
 {/**<Provider store={store}> */} 
    <App />
 {/**<Provider store={store}> */} 
  </BrowserRouter>,
)
