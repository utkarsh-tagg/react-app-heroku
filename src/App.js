import React from "react";
import { Redirect, Route, Switch, Links } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import From from "./From/From";
import Second from "./Page/Second";
import Propose from "./Propose/Propose";
import Chocolate from "./Chocolate/Chocolate";
import Teddy from "./Teddy/Teddy";
import Feb from "./Feb/Feb";
import Hug from "./Hug/Hug";
import Kiss from "./Kiss/Kiss";
import Valentine from "./Valentine/Valentine";
import Third from "./Page3/Third";
import Four from "./Page4/Four";
import Five from "./Page5/Five";

const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={From} />
        <Route exact path="/Second" component={Second} />
        <Route exact path="/Propose" component={Propose} />
        <Route exact path="/Chocolate" component={Chocolate} />
        <Route exact path="/Teddy" component={Teddy} />
        <Route exact path="/Feb" component={Feb} />
        <Route exact path="/Hug" component={Hug} />
        <Route exact path="/Kiss" component={Kiss} />
        <Route exact path="/Valentine" component={Valentine} />
        <Route exact path="/Third" component={Third} />
        <Route exact path="/Four" component={Four} />
        <Route exact path="/Five" component={Five} />
      </Switch>
    </div>
  );
};

export default App;
