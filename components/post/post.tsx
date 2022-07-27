import Image from "next/image";
import { Container, Author, Title } from "./styles";

export const Post = ({ post }: PropsTypes) => (
  <Container>
    <Image
      src={post.img_url}
      alt="teste"
      layout="fill"
      className="post__image"
    />
    <Title>{post.name}</Title>
    <Author>{post.author_name}</Author>
  </Container>
);

interface PropsTypes {
  post: IPost;
}

interface IPost {
  name: string;
  author_name: string;
  img_url: string;
}
