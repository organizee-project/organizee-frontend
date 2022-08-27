import { Editor } from "./styles";

import EditorJS from "@editorjs/editorjs";

export const AddGuideEditor = () => {
  const editor = new EditorJS({
    holder: "editorjs",
  });

  return <Editor id="editorjs"></Editor>;
};
