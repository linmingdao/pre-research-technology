import { useEffect, useRef } from "react";
import data from "./data";
import { message } from "antd";
import FlowChart, {
  ElementType,
  AvailableBuiltInType,
} from "../../components/FlowChart";
import "../../components/FlowChart/_style.scss";

const FlowChartDemo: React.FC = () => {
  const flowRef = useRef<any>(null);
  const onSave = (elements: any[]) => message.info(JSON.stringify(elements));

  const onElementClick = (event: any, element: any) =>
    message.info(`You click：${JSON.stringify(element)}`);

  const onElementDrop = (element: ElementType) => element;

  useEffect(() => {
    setTimeout(() => {
      console.log(flowRef);
      flowRef.current.setElements([]);
    }, 1000);
  }, []);

  return (
    <FlowChart
      editable
      ref={flowRef}
      dataSource={data}
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
