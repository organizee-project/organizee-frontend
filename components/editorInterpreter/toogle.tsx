import { useState } from "react";

import { BsChevronRight, BsChevronDown } from "react-icons/bs";
import { EText } from "types/post";

import { StyledToogle } from "./styles";
import { Text } from "./text";

export const Toogle = ({ block }) => {
  const [hide, setHide] = useState(false);

  return (
    <StyledToogle>
      <h3>
        {hide ? (
          <BsChevronRight className="pointer" onClick={() => setHide(!hide)} />
        ) : (
          <BsChevronDown className="pointer" onClick={() => setHide(!hide)} />
        )}
        {block.data.title}
      </h3>
      <Text type={EText.paragraph} hide={hide}>
        {block.data.description}
      </Text>
    </StyledToogle>
  );
};
