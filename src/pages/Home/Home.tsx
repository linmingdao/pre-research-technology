import "./Home.scss";
import React from "react";
import { Switch } from "react-router-dom";
import { RouteWithSubRoutes } from "../../router/router";
import Navigation from "../../components/Navigation/Navigation";

interface HomePropsType {
  routes: any[];
}

const Home: React.FC<HomePropsType> = ({ routes }) => {
  return (
    <div className="home">
      <Navigation />
      <div className="content-box">
        <div className="content">
          <Switch>
            {routes.map((route, i) => (
              <RouteWithSubRoutes key={i} {...route} />
            ))}
          </Switch>
        </div>
      </div>
    </div>
  );
};

export default Home;
