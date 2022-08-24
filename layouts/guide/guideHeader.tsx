import { EText } from "common/types/post";
import { Text } from "components/text";
import { Flex } from "styles/styles";
import { Categories } from "./styles";

import {
  BsBookmark,
  BsBookmarkFill,
  BsHeart,
  BsHeartFill,
  BsThreeDots,
} from "react-icons/bs";
import { useState } from "react";

export const Header = ({ guide }) => {
  const [liked, setLiked] = useState(guide.is_saved);
  const [saved, setSaved] = useState(guide.is_liked);

  return (
    <>
      <Flex>
        <div>
          <Text type={EText.title}>{guide.title}</Text>
          <Text type={EText.author}>Por {guide.author}</Text>
        </div>
        <Flex width="136px">
          <div onClick={() => setLiked(!liked)}>
            {liked ? <BsHeartFill size="26px" /> : <BsHeart size="26px" />}
          </div>
          <div onClick={() => setSaved(!saved)}>
            {saved ? (
              <BsBookmarkFill size="26px" />
            ) : (
              <BsBookmark size="26px" />
            )}
          </div>
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
