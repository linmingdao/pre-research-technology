import { useEffect, useRef, useState } from "react";
import data from "./data";
import { message } from "antd";
import "tetris-ui/dist/index.css";
import { FlowChart } from "tetris-ui";
import { ElementType } from "tetris-ui/dist/components/Functional/FlowChart";

const FlowChartDemo: React.FC = () => {
  const flowRef = useRef<any>(null);
  const [dataSource, setDataSource] = useState<any[]>(data);
  const onSave = (elements: any[]) => message.info(JSON.stringify(elements));

  const onElementClick = (event: any, element: any) =>
    message.info(`You click：${JSON.stringify(element)}`);

  const onElementDrop = (element: ElementType) => element;

  // useEffect(() => {
  //   setTimeout(() => {
  //     console.log(flowRef);
  //     flowRef.current.setElements([]);
  //   }, 1000);
  // }, []);

  useEffect(() => {
    setTimeout(() => {
      setDataSource([]);
    }, 5000);
  }, []);

  return (
    <FlowChart
      editable
      ref={flowRef}
      dataSource={dataSource}
      onSave={onSave}
      onElementDrop={onElementDrop}
      onElementClick={onElementClick}
    />
  );
};

FlowChartDemo.displayName = "FlowChartDemo";

export default FlowChartDemo;
