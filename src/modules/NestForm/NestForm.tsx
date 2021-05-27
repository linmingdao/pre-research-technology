import "tetris-ui/dist/index.css";
import { Button, Form, Input } from "antd";
import React from "react";
import { TitleLayout } from "tetris-ui";

const tmp = [
  {
    label: "读取的数据库",
    name: "ReaderDB",
    instance: {
      compare: null,
    },
    id: "GmR5KFDt6LghH3nuIIke1",
    type: "bricks",
    props: {
      name: "reader",
      value: "",
      label: "Reader数据库配置",
      rules: ["Required"],
      placeholder: "请配置",
    },
  },
  {
    label: "写入的数据库",
    name: "WriterDB",
    instance: {
      compare: null,
    },
    id: "TRXQvDB_ra5stTJYOBIF-",
    type: "bricks",
    props: {
      name: "writer",
      label: "Writer数据库配置",
      rules: ["Required"],
      placeholder: "请配置",
    },
  },
  {
    label: "内嵌的组件",
    name: "WriterDB",
    id: "TRXQvDB_ra5stTJYOBIF-",
    children: [
      {
        label: "写入的数据库",
        name: "WriterDB",
        instance: {
          compare: null,
        },
        id: "TRXQvDB_ra5stTJYOBIF-",
        type: "bricks",
        props: {
          name: "writer",
          label: "Writer数据库配置",
          rules: ["Required"],
          placeholder: "请配置",
        },
      },
      {
        label: "写入的数据库",
        name: "WriterDB",
        instance: {
          compare: null,
        },
        id: "TRXQvDB_ra5stTJYOBIF-",
        type: "bricks",
        props: {
          name: "writer",
          label: "Writer数据库配置",
          rules: ["Required"],
          placeholder: "请配置",
        },
      },
    ],
    props: {
      name: "writer",
      label: "Writer数据库配置",
      rules: ["Required"],
      placeholder: "请配置",
    },
  },
];

console.log(tmp);

const BraftEditorDemo: React.FC = () => {
  const handleOnFinish = (values: any) => {
    console.log(values);
  };

  return (
    <TitleLayout hasBack title="自定义嵌套表单">
      <Form onFinish={handleOnFinish}>
        <Form.Item label="test" name="test">
          <Input />
        </Form.Item>
        <Form.Item label="test1">
          <Form.Item label="test2" name="test2">
            <Input />
          </Form.Item>
          <Form.Item label="test2" name="test3">
            <Input />
          </Form.Item>
          <Form.Item label="test2" name="test4">
            <Input />
          </Form.Item>
          <Form.Item label="test2">
            <Form.Item label="test2" name="test6" rules={[{ required: true }]}>
              <Input />
            </Form.Item>
            <Form.Item label="test2" name="test7">
              <Input />
            </Form.Item>
          </Form.Item>
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            提交
          </Button>
        </Form.Item>
      </Form>
    </TitleLayout>
  );
};

export default BraftEditorDemo;
