import { Flex, Paragraph } from "styles";
import { BsReply } from "react-icons/bs";
import { CommentUser } from "./commentUser";
import { Container } from "./styles";

export const CommentRead = ({ comment }) => {
  return (
    <Container>
      <CommentUser user={comment.user} />
      <Paragraph mb="24px">{comment.content}</Paragraph>
      <Flex justifyContent="space-between" alignItems="baseline">
        <Paragraph fontSize="12px" mb="0px">
          20/11/2022 - 10h55
        </Paragraph>
        <BsReply size="28px" />
      </Flex>
    </Container>
  );
};
