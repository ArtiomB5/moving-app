import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { I18nextProvider } from "react-i18next";
import i18next from "i18next";
import common_kk from "./translations/kk/common.json";
import common_en from "./translations/en/common.json";
import common_ru from "./translations/ru/common.json";

i18next.init({
    interpolation: { escapeValue: false },  // React already does escaping
    lng: 'en',                              // language to use
    resources: {
        en: {
            common: common_en               // 'common' is our custom namespace
        },
        kk: {
            common: common_kk
        },
        ru: {
          common: common_ru
      },
    },
});

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <BrowserRouter>
    <I18nextProvider i18n={i18next}>
      <App />
    </I18nextProvider>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
