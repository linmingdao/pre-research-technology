import "./Greeting.scss";
import React from "react";
import "@pupu/opm-bricks/dist/index.css";
import { TitleLayout } from "@pupu/opm-bricks";

const Greeting: React.FC = () => {
  return <TitleLayout hasBack title="Welcome"></TitleLayout>;
};

export default Greeting;
