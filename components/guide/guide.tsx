import Image from "next/image";
import Link from "next/link";

import { Container, Author, Title, Lock } from "./styles";

import { BsUnlock, BsLock } from "react-icons/bs";
import { IGuide } from "types/guide";

export const Guide = ({ guide, showType, isLoading }: PropsTypes) => {
  if (isLoading)
    return (
      <Container backgroundColor="#fcfcfc">
        <Title height="24px" className="skeleton" />
        <Author width="200px" height="12px" className="skeleton" />
      </Container>
    );

  return (
    <Link href={`/${guide.slug}`}>
      <Container className="pointer">
        <Image
          src={
            guide.imgUrl != ""
              ? guide.imgUrl
              : "https://images.unsplash.com/photo-1493612276216-ee3925520721"
          }
          alt="teste"
          layout="fill"
          className="post__image"
        />
        <Title>{guide.title}</Title>
        <Author>{guide.user.name}</Author>
        {showType && <Lock>{guide.type ? <BsLock /> : <BsUnlock />}</Lock>}
      </Container>
    </Link>
  );
};

interface PropsTypes {
  guide?: IGuide;
  isLoading?: boolean;
  showType?: boolean;
}
