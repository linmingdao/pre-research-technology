import "./Home.scss";
import React, { Suspense } from "react";
import { Switch } from "react-router-dom";
import { RouteWithSubRoutes } from "../../router/router";
import Loading from "../../components/Loading/Loading";
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
          <Suspense fallback={<Loading />}>
            <Switch>
              {routes.map((route, i) => (
                <RouteWithSubRoutes key={i} {...route} />
              ))}
            </Switch>
          </Suspense>
        </div>
      </div>
    </div>
  );
};

export default Home;
