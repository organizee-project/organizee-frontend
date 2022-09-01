import { useEffect, useRef } from "react";
import { Editor } from "./styles";

import EditorJS from "@editorjs/editorjs";
import Header from "@editorjs/header";
import Quote from "@editorjs/quote";
import Table from "@editorjs/table";
import Code from "@editorjs/code";
import { ToogleList } from "components/editorTools";

const AddGuideEditor = ({ setContent }) => {
  const ejInstance = useRef(null);

  useEffect(() => {
    if (!ejInstance.current) {
      initEditor();
    }
    return () => {
      if (ejInstance.current) {
        ejInstance.current.destroy();
        ejInstance.current = null;
      }
    };
  }, []);

  async function handleSave() {
    const savedData = await ejInstance.current?.save();
    setContent(savedData.blocks);
  }

  const initEditor = () => {
    const editor = new EditorJS({
      holder: "editorjs",
      onReady: () => {
        ejInstance.current = editor;
      },
      onChange: () => {
        handleSave();
      },
      tools: {
        header: Header,
        quote: Quote,
        table: Table,
        code: Code,
        toogle: ToogleList,
      },
    });
  };

  return <Editor id="editorjs" />;
};

export default AddGuideEditor;
