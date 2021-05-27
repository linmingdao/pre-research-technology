import "braft-editor/dist/index.css";
import "./BraftEditor.scss";
import "tetris-ui/dist/index.css";
import { Button } from "antd";
import BraftEditor from "braft-editor";
import React, { useState } from "react";
import { TitleLayout, FilterBox } from "tetris-ui";
import "./braftEditorExtension.js";

const BraftEditorDemo: React.FC = () => {
  const [isReadOnly, setIsReadOnly] = useState(false);
  const [editorState, setEditorState] = useState(() =>
    BraftEditor.createEditorState(null)
  );
  function handleChange(editorState: any) {
    setEditorState(editorState);
  }

  return (
    <TitleLayout hasBack title="Braft">
      <FilterBox>
        <Button type="text" onClick={() => setIsReadOnly(!isReadOnly)}>
          当前处于：{isReadOnly ? "只读模式" : "可编辑模式"}
        </Button>
      </FilterBox>
      <BraftEditor
        id="demo-editor-with-entity-extension"
        style={{ border: "1px solid #d4d4d4", height: 400 }}
        value={editorState}
        readOnly={isReadOnly}
        onChange={handleChange}
        contentStyle={{ height: 300, overflowY: "auto" }}
      />
    </TitleLayout>
  );
};

export default BraftEditorDemo;
