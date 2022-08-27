import { Text, Header, Quote, Code } from "components/textInterpreter";

export const Content = ({ content }) => {
  return content.map((block) => {
    if (block.type === "header")
      return <Header level={block.data.level}>{block.data.text}</Header>;
    if (block.type === "paragraph")
      return <Text type={block.type}>{block.data.text}</Text>;
    if (block.type === "quote") return <Quote>{block.data.text}</Quote>;
    if (block.type === "code") return <Code>{block.data.code}</Code>;
  });
};
