import { EText } from "common/types/post";
import { Text } from "components/editorInterpreter";
import { Flex } from "styles";
import { Categories } from "./styles";

export const LayoutHeader = ({ guide, children }) => {
  return (
    <>
      <Flex>
        <div>
          <Text type={EText.title}>{guide.title}</Text>
          <Text type={EText.author}>Por {guide.author}</Text>
        </div>
        {children}
      </Flex>
      <Categories>
        {guide.tags.map((category, i) => (
          <li key={i}>{category.name}</li>
        ))}
      </Categories>
    </>
  );
};
