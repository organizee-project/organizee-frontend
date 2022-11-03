import Image from "next/image";
import {
  Text,
  Header,
  Quote,
  Code,
  Toogle,
  Table,
} from "components/editorInterpreter";

export const LayoutContent = ({ content }) => {
  const newContent = JSON.parse(content);
  return newContent.blocks.map((block) => {
    if (block.type === "header")
      return <Header level={block.data.level}>{block.data.text}</Header>;
    if (block.type === "paragraph")
      return <Text type={block.type}>{block.data.text}</Text>;
    if (block.type === "quote") return <Quote>{block.data.text}</Quote>;
    if (block.type === "code") return <Code>{block.data.code}</Code>;
    if (block.type === "image")
      return (
        <Image
          src={block.data.file.url}
          alt={block.data.file.caption}
          width="100vw"
          height="100%"
          layout="responsive"
          objectFit="contain"
        />
      );
    if (block.type === "toogle") return <Toogle block={block} />;
    if (block.type === "table") return <Table block={block} />;
  });
};
