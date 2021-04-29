import { useEffect, useRef, useState } from "react";
import data from "./data";
import { message } from "antd";
import FlowChart, {
  ElementType,
  AvailableBuiltInType,
} from "../../components/FlowChart";
import "../../components/FlowChart/_style.scss";

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
      defaultNodes={[
        AvailableBuiltInType.END,
        AvailableBuiltInType.JUDGMENT,
        AvailableBuiltInType.PROCESS,
        AvailableBuiltInType.START,
      ]}
    />
  );
};

FlowChartDemo.displayName = "FlowChartDemo";

export default FlowChartDemo;
