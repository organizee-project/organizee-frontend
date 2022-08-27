import dynamic from "next/dynamic";

const Table = dynamic(() => import("@editorjs/table"), { ssr: false });
const List = dynamic(() => import("@editorjs/list"), { ssr: false });
const Code = dynamic(() => import("@editorjs/code"), { ssr: false });
const Header = dynamic(() => import("@editorjs/header"), { ssr: false });
const Quote = dynamic(() => import("@editorjs/quote"), { ssr: false });
const Marker = dynamic(() => import("@editorjs/marker"), { ssr: false });
const SimpleImage = dynamic(() => import("@editorjs/simple-image"), {
  ssr: false,
});

export const EDITOR_JS_TOOLS = {
  // NOTE: Paragraph is default tool. Declare only when you want to change paragraph option.
  // paragraph: Paragraph,
  list: List,
  code: Code,
  header: Header,
  quote: Quote,
  marker: Marker,
  simpleImage: SimpleImage,
  table: Table,
};
