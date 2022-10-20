import { Flex, Paragraph } from "styles";
import { BsHeart, BsHeartFill, BsReply } from "react-icons/bs";
import { useState } from "react";
import { CommentUser } from "./commentUser";
import { Container } from "./styles";

export const CommentRead = ({ comment }) => {
  const [isLiked, setIsLiked] = useState(comment.is_liked);

  return (
    <Container>
      <CommentUser user={comment.user} />
      <Paragraph>{comment.content}</Paragraph>
      <Flex>
        <Paragraph>20/11/2022 - 10h55</Paragraph>
        <Flex width="50px">
          {isLiked ? <BsHeartFill /> : <BsHeart />}
          <BsReply />
        </Flex>
      </Flex>
    </Container>
  );
};
