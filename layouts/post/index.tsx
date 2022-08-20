import { Header } from "./postHeader";
import { Content } from "./postContent";

import { Container } from "styles/styles";

const Post = () => {
  const post = {
    title: "A arte europeia da perspectiva latina",
    author: "Anna Luiza",
  };

  return (
    <Container>
      <Header post={post} />
      <Content post={post} />
    </Container>
  );
};

export default Post;
