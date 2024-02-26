
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './sass/main.css'
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store/store.ts';
import "./i18n"

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
 <Provider store={store}>
    <App />
    </Provider>
</BrowserRouter>,
)
