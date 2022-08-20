import { EText } from "common/types/post";
import { Text } from "components/text";
import { Flex } from "styles/styles";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faBookmark,
  faEllipsis,
} from "@fortawesome/free-solid-svg-icons";

export const Header = ({ post }) => {
  return (
    <Flex>
      <div>
        <Text type={EText.title}>{post.title}</Text>
        <Text type={EText.author}>Por {post.author}</Text>
      </div>
      <Flex width="136px">
        <FontAwesomeIcon icon={faHeart} size="2x" />
        <FontAwesomeIcon icon={faBookmark} size="2x" />
        <FontAwesomeIcon icon={faEllipsis} size="2x" />
      </Flex>
    </Flex>
  );
};
