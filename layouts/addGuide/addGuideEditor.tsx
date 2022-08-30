import { Editor } from "./styles";

import EditorJS from "@editorjs/editorjs";
import Header from "@editorjs/header";
import Quote from "@editorjs/quote";
import Table from "@editorjs/table";
import Code from "@editorjs/code";

const AddGuideEditor = () => {
  const editor = new EditorJS({
    holder: "editorjs",
    tools: {
      header: Header,
      quote: Quote,
      table: Table,
      code: Code,
    },
  });

  return <Editor id="editorjs"></Editor>;
};

export default AddGuideEditor;
