import React from "react";
import ReactDOM from "react-dom";
import { Route, BrowserRouter, withRouter, Switch } from "react-router-dom";
import NotLiveRoute from "react-live-route";
import List from "./list";
import Detail from "./detail";
import Bar from "./bar";
import About from "./about";
import Home from "./home";
import NotFound from "./notFound";
import "./styles.css";

const LiveRoute = withRouter(NotLiveRoute);

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/item/:id" component={Detail} />
        <Route path="/items" />
        <Route path="/about" />
        <Route path="*" render={NotFound} />
      </Switch>
      <LiveRoute
        path="/items"
        component={List}
        livePath={"/item/:id"}
        name="items"
        onHide={(location, match, history, livePath, alwaysLive) => {
          console.log("hide hook tiggered");
        }}
        onReappear={(location, match, history, livePath, alwaysLive) => {
          console.log("reappear hook tiggered");
        }}
      />
      <LiveRoute
        path="/about"
        alwaysLive={true}
        component={About}
        name="about"
      />
      <Bar />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  rootElement
);

if ("scrollRestoration" in window.history) {
  // 默认值为 'auto'
  // window.history.scrollRestoration = 'manual'
}

document.addEventListener("scrollTo", () => {
  console.log("document scrolled");
});
