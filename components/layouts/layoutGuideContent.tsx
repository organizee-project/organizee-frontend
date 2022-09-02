import Image from "next/image";
import { Text, Header, Quote, Code, Toogle } from "components/textInterpreter";

export const LayoutContent = ({ content }) => {
  return content.map((block) => {
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
    if (block.type === "toogle") return <Toogle block={block}></Toogle>;
  });
};
