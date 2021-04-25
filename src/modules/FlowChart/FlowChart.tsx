import data from "./data";
import { FlowChart, NodeType } from "../../components/FlowChart";

const FlowChartDemo: React.FC = () => {
  const onElementClick = (event: any, element: any) =>
    console.log("click", element);

  const onElementDrop = (node: NodeType) => node;

  return (
    <FlowChart
      dataSource={data}
      onElementDrop={onElementDrop}
      onElementClick={onElementClick}
    />
  );
};

FlowChartDemo.displayName = "FlowChartDemo";

export default FlowChartDemo;
