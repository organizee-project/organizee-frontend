import {
  Text,
  Header,
  Quote,
  Code,
  Toogle,
  Table,
  Picture,
} from "components/editorInterpreter";

export const LayoutContent = ({ content }) => {
  const newContent = JSON.parse(content);
  return newContent.blocks.map((block, i) => {
    if (block.type === "header")
      return (
        <Header level={block.data.level} key={i}>
          {block.data.text.replaceAll("&nbsp", "")}
        </Header>
      );
    if (block.type === "paragraph")
      return (
        <Text type={block.type} key={i}>
          {block.data.text.replaceAll("&nbsp", "")}
        </Text>
      );
    if (block.type === "quote")
      return <Quote key={i}>{block.data.text.replaceAll("&nbsp", "")}</Quote>;
    if (block.type === "code") return <Code key={i}>{block.data.code}</Code>;
    if (block.type === "image")
      return <Picture image={block.data.file} key={i} />;
    if (block.type === "toogle") return <Toogle block={block} key={i} />;
    if (block.type === "table") return <Table block={block} key={i} />;
  });
};
