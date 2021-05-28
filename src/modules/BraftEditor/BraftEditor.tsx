import "braft-editor/dist/index.css";
import "./BraftEditor.scss";
import "tetris-ui/dist/index.css";
import { Button } from "antd";
import BraftEditor from "braft-editor";
import React, { useState } from "react";
import { TitleLayout, FilterBox } from "tetris-ui";
import { applyPlugins } from "./braftEditorExtension.js";

applyPlugins(["demo-editor-with-entity-extension"]);

const BraftEditorDemo: React.FC = () => {
  const [isReadOnly, setIsReadOnly] = useState(false);
  const [editorState, setEditorState] = useState(() =>
    BraftEditor.createEditorState(null)
  );
  function handleChange(editorState: any) {
    setEditorState(editorState);
  }

  return (
    <TitleLayout
      hasBack
      title="Braft"
      renderTool={() => (
        <FilterBox>
          <Button
            type="link"
            danger={!isReadOnly}
            onClick={() => setIsReadOnly(!isReadOnly)}
          >
            当前处于：{isReadOnly ? "只读模式" : "可编辑模式"}
          </Button>
        </FilterBox>
      )}
    >
      <BraftEditor
        id="demo-editor-with-entity-extension"
        style={{ border: "1px solid #d4d4d4", height: 400 }}
        value={editorState}
        readOnly={isReadOnly}
        onChange={handleChange}
        contentStyle={{ height: 300, overflowY: "auto" }}
        placeholder="请输入..."
      />
    </TitleLayout>
  );
};

export default BraftEditorDemo;
