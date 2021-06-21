import React from "react";
import { Menu } from "antd";
import { useHistory } from "react-router-dom";
import {
  ApartmentOutlined,
  BarChartOutlined,
  SmileOutlined,
} from "@ant-design/icons";

const Navigation: React.FC = () => {
  const history = useHistory();

  // 处理点击菜单的路由跳转，菜单的 key 属性直接配置模块路径
  function handleMenuSelect(event: any) {
    history.push(event.key);
  }

  return (
    <Menu className="nav" mode="horizontal" onSelect={handleMenuSelect}>
      <Menu.Item key="/formeditor" icon={<ApartmentOutlined />}>
        表单编辑器
      </Menu.Item>
      <Menu.Item key="/nestform" icon={<ApartmentOutlined />}>
        自定义嵌套表单
      </Menu.Item>
      <Menu.SubMenu key="rich" icon={<BarChartOutlined />} title="富文本编辑器">
        <Menu.Item key="/braft" icon={<ApartmentOutlined />}>
          braft
        </Menu.Item>
        <Menu.Item key="/quill" icon={<ApartmentOutlined />}>
          react-quill
        </Menu.Item>
        <Menu.Item key="/draft" icon={<ApartmentOutlined />}>
          draft-js
        </Menu.Item>
      </Menu.SubMenu>
      <Menu.Item key="/flow" icon={<ApartmentOutlined />}>
        流程图
      </Menu.Item>
      <Menu.Item key="/gretting" icon={<SmileOutlined />}>
        欢迎页
      </Menu.Item>
    </Menu>
  );
};

export default Navigation;
