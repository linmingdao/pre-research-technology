import React from "react";
import "draft-js/dist/Draft.css";
import "tetris-ui/dist/index.css";
import { Editor, EditorState } from "draft-js";
import { TitleLayout } from "tetris-ui";

const DraftJs: React.FC = () => {
  const [editorState, setEditorState] = React.useState(() =>
    EditorState.createEmpty()
  );

  const editor = React.useRef<Editor>(null);

  function focusEditor() {
    editor?.current?.focus();
  }

  return (
    <TitleLayout hasBack title="DraftJs">
      <div
        style={{
          padding: 5,
          cursor: "text",
          minHeight: "6em",
          border: "1px solid #eee",
        }}
        onClick={focusEditor}
      >
        <Editor
          ref={editor}
          editorState={editorState}
          onChange={setEditorState}
          placeholder="Write something!"
        />
      </div>
    </TitleLayout>
  );
};

export default DraftJs;
