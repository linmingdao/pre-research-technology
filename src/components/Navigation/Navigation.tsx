import React from "react";
import { Menu } from "antd";
import { useHistory } from "react-router-dom";
import {
  HddOutlined,
  TableOutlined,
  BarChartOutlined,
  DatabaseOutlined,
} from "@ant-design/icons";

const Navigation: React.FC = () => {
  const history = useHistory();

  // 处理点击菜单的路由跳转，菜单的 key 属性直接配置模块路径
  function handleMenuSelect(event: any) {
    history.push(event.key);
  }

  return (
    <Menu className="nav" mode="horizontal" onSelect={handleMenuSelect}>
      <Menu.SubMenu
        key="preresearch"
        icon={<DatabaseOutlined />}
        title="流程图"
      >
        <Menu.Item key="/flow" icon={<HddOutlined />}>
          流程图
        </Menu.Item>
        <Menu.Item key="/flow_editor" icon={<TableOutlined />}>
          流程图编辑器
        </Menu.Item>
      </Menu.SubMenu>
      <Menu.Item key="/gretting" icon={<BarChartOutlined />}>
        欢迎页
      </Menu.Item>
    </Menu>
  );
};

export default Navigation;
