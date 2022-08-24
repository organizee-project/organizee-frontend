import Image from "next/image";
import Link from "next/link";

import { Container, Author, Title } from "./styles";

export const Guide = ({ guide }: PropsTypes) => (
  <Link href={`/guide/${guide.slug}`}>
    <Container className="pointer">
      <Image
        src={guide.img_url}
        alt="teste"
        layout="fill"
        className="post__image"
      />
      <Title>{guide.name}</Title>
      <Author>{guide.author_name}</Author>
    </Container>
  </Link>
);

interface PropsTypes {
  guide: IGuide;
}

interface IGuide {
  name: string;
  author_name: string;
  img_url: string;
  slug: string;
}
