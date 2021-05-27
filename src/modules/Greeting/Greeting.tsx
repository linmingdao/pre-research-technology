import "./Greeting.scss";
import React from "react";
import "tetris-ui/dist/index.css";
import { TitleLayout } from "tetris-ui";

const Greeting: React.FC = () => {
  return <TitleLayout hasBack title="Welcome"></TitleLayout>;
};

export default Greeting;
