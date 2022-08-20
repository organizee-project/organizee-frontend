import { EText } from "common/types/post";
import { Text } from "components/text";

export const Content = ({ content }) => {
  return content.map((block) => {
    if (block.type === "paragraph" || block.type === "header")
      return (
        <>
          <Text type={block.type} level={block.data.level}>
            {block.data.text}
          </Text>
        </>
      );
  });
};
