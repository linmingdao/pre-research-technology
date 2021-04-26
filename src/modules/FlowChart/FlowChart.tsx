import data from "./data";
import { message } from "antd";
import FlowChart, {
  ElementType,
  AvailableBuiltInType,
} from "../../components/FlowChart";
import "../../components/FlowChart/_style.scss";

const FlowChartDemo: React.FC = () => {
  const onSave = (elements: any[]) => message.info(JSON.stringify(elements));

  const onElementClick = (event: any, element: any) =>
    message.info(`You click：${JSON.stringify(element)}`);

  const onElementDrop = (element: ElementType) => element;

  return (
    <FlowChart
      editable
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
