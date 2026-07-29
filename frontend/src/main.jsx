import ReactDOM from "react-dom/client";

import "leaflet/dist/leaflet.css";

import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import App from "./App";

import { store } from "./redux/store";

import ThemeContext from "./theme/ThemeContext";

import NotificationProvider 
from "./context/NotificationContext";

import "./styles/global.css";


ReactDOM.createRoot(
  document.getElementById("root")
).render(


  <Provider store={store}>


    <ThemeContext>


      <NotificationProvider>


        <BrowserRouter>


          <App />


        </BrowserRouter>


      </NotificationProvider>


    </ThemeContext>


  </Provider>


);