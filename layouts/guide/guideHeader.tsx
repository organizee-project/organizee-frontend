import { EText } from "common/types/post";
import { Text } from "components/text";
import { Flex } from "styles/styles";
import { Categories } from "./styles";

import { BsBookmark, BsHeart, BsThreeDots } from "react-icons/bs";

export const Header = ({ guide }) => {
  return (
    <>
      <Flex>
        <div>
          <Text type={EText.title}>{guide.title}</Text>
          <Text type={EText.author}>Por {guide.author}</Text>
        </div>
        <Flex width="136px">
          <BsHeart size="26px" />
          <BsBookmark size="26px" />
          <BsThreeDots size="26px" />
        </Flex>
      </Flex>
      <Categories>
        {guide.categories.map((category, i) => (
          <li key={i}>{category}</li>
        ))}
      </Categories>
    </>
  );
};
