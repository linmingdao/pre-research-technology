import "braft-editor/dist/index.css";
import "./BraftEditor.scss";
import "braft-extensions/dist/table.css";
import "braft-extensions/dist/code-highlighter.css";
import BraftEditor from "braft-editor";
import ColorPicker from "braft-extensions/dist/color-picker";
import Table from "braft-extensions/dist/table";
// import Markdown from "braft-extensions/dist/markdown";
import CodeHighlighter from "braft-extensions/dist/code-highlighter";
import "prismjs/components/prism-java";
import "prismjs/components/prism-php";

export function applyPlugins(includeEditors = [], excludeEditors = []) {
  const entityExtension = {
    // 指定扩展类型
    type: "entity",
    // 指定该扩展对哪些编辑器生效，不指定includeEditors则对所有编辑器生效
    includeEditors,
    // 指定扩展的entity名称，推荐使用全部大写，内部也会将小写转换为大写
    name: "KEYBOARD-ITEM",
    // 在编辑器工具栏中增加一个控制按钮，点击时会将所选文字转换为该entity
    control: { text: "按键" },
    // 指定entity的mutability属性，可选值为MUTABLE和IMMUTABLE，表明该entity是否可编辑，默认为MUTABLE
    mutability: "IMMUTABLE",
    // 指定通过上面新增的按钮创建entity时的默认附加数据
    data: { foo: "hello" },
    // 指定entity在编辑器中的渲染组件
    component: (props) => {
      // 通过entityKey获取entity实例，关于entity实例请参考https://github.com/facebook/draft-js/blob/master/src/model/entity/DraftEntityInstance.js
      const entity = props.contentState.getEntity(props.entityKey);
      // 通过entity.getData()获取该entity的附加数据
      const { foo } = entity.getData();
      return (
        <span data-foo={foo} className="keyboard-item">
          {props.children}
        </span>
      );
    },
    // 指定html转换为editorState时，何种规则的内容将会转换成该entity
    importer: (nodeName, node) => {
      if (
        nodeName.toLowerCase() === "span" &&
        node.classList &&
        node.classList.contains("keyboard-item")
      ) {
        // 此处可以返回true或者一个包含mutability和data属性的对象
        return { mutability: "IMMUTABLE", data: { foo: node.dataset.foo } };
      }
    },
    // 指定输出该entnty在输出的html中的呈现方式
    exporter: (entityObject, originalText) => {
      // 注意此处的entityObject并不是一个entity实例，而是一个包含type、mutability和data属性的对象
      const { foo } = entityObject.data;
      return (
        <span data-foo={foo} className="keyboard-item">
          {originalText}
        </span>
      );
    },
  };

  // 加载扩展模块
  BraftEditor.use([
    entityExtension,
    ColorPicker({
      includeEditors,
      theme: "light", // 支持dark和light两种主题，默认为dark
    }),
    Table({
      defaultColumns: 3, // 默认列数
      defaultRows: 3, // 默认行数
      withDropdown: true, // 插入表格前是否弹出下拉菜单
      columnResizable: true, // 是否允许拖动调整列宽，默认false
      exportAttrString: "", // 指定输出HTML时附加到table标签上的属性字符串
      includeEditors,
      excludeEditors,
    }),
    //   Markdown({
    //     includeEditors: ["demo-editor-with-entity-extension"], // 指定该模块对哪些BraftEditor生效，不传此属性则对所有BraftEditor有效
    //     excludeEditors: ["editor-id-2"], // 指定该模块对哪些BraftEditor无效
    //   }),
    CodeHighlighter({
      syntaxs: [
        { name: "JavaScript", syntax: "javascript" },
        { name: "HTML", syntax: "html" },
        { name: "CSS", syntax: "css" },
        { name: "Java", syntax: "java" },
        { name: "PHP", syntax: "php" },
      ],
      includeEditors,
      excludeEditors,
    }),
  ]);
}
