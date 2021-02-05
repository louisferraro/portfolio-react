import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./css/index.css";
import HomePage from "./pages/HomePage";
import reportWebVitals from "./reportWebVitals";
import Divie from "./components/projects/Divie";
import  PaymentPage from "./pages/PaymentPage"

ReactDOM.render(
  <BrowserRouter>
    <div className="main">
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/paymentpage" component={PaymentPage} />
        <Route exact path="/divie" component={Divie} />
      </Switch>
    </div>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
