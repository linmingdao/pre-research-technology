import React from "react";
import { Menu } from "antd";
import { useHistory } from "react-router-dom";
import { ApartmentOutlined, SmileOutlined } from "@ant-design/icons";

const Navigation: React.FC = () => {
  const history = useHistory();

  // 处理点击菜单的路由跳转，菜单的 key 属性直接配置模块路径
  function handleMenuSelect(event: any) {
    history.push(event.key);
  }

  return (
    <Menu className="nav" mode="horizontal" onSelect={handleMenuSelect}>
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
