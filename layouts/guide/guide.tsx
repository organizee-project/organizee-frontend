import { useEffect, useState } from "react";

import { Options } from "components/options";
import { LayoutGuide } from "components/layouts";

import { Flex } from "styles";

import {
  BsBookmark,
  BsBookmarkFill,
  BsHeart,
  BsHeartFill,
  BsThreeDots,
} from "react-icons/bs";
import { GuideComments } from "./guideComments";
import { useRouter } from "next/router";
import {
  useGuideBySlug,
  useGuideInteractions,
  useSaveGuide,
  useUnsaveGuide,
  useLikeGuide,
  useUnlikeGuide,
} from "services/guides";
import { GuideSuggestions } from "./guideSuggestions";

export const Guide = () => {
  const router = useRouter();
  const { slug } = router.query;

  const { data, isLoading } = useGuideBySlug(slug as string);
  const { data: interactions } = useGuideInteractions(slug as string);

  const { mutate: saveGuide } = useSaveGuide({
    onSuccess: () => {
      setSaved(true);
    },
  });
  const { mutate: unsaveGuide } = useUnsaveGuide({
    onSuccess: () => {
      setSaved(false);
    },
  });

  const { mutate: likeGuide } = useLikeGuide({
    onSuccess: () => {
      setLiked(true);
    },
  });
  const { mutate: unlikeGuide } = useUnlikeGuide({
    onSuccess: () => {
      setLiked(false);
    },
  });

  const [openOptions, setOpenOptions] = useState(false);
  const [liked, setLiked] = useState(false);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    if (interactions) {
      setLiked(interactions.liked);
      setSaved(interactions.saved);
    }
  }, [interactions]);

  const onClickSave = () => {
    if (saved) unsaveGuide(slug);
    else saveGuide(slug);
  };

  const onClickLike = () => {
    if (liked) unlikeGuide(slug);
    else likeGuide(slug);
  };

  if (isLoading) return <></>;

  return (
    <>
      <LayoutGuide guide={data}>
        <Flex width="136px" justifyContent="space-between">
          <div onClick={() => onClickLike()}>
            {liked ? (
              <BsHeartFill size="26px" className="pointer" />
            ) : (
              <BsHeart size="26px" className="pointer" />
            )}
          </div>
          <div onClick={() => onClickSave()}>
            {saved ? (
              <BsBookmarkFill size="26px" className="pointer" />
            ) : (
              <BsBookmark size="26px" className="pointer" />
            )}
          </div>
          <div style={{ position: "relative" }}>
            <BsThreeDots
              size="26px"
              className="pointer"
              onClick={() => setOpenOptions(!openOptions)}
            />
            <Options
              open={openOptions}
              itens={[
                { name: "Denunciar Trilha", onClick: () => {} },
                { name: "Denunciar Criador", onClick: () => {} },
              ]}
            />
          </div>
        </Flex>
      </LayoutGuide>
      <GuideSuggestions categories={data.categories} />
      <GuideComments comments={[]} />
    </>
  );
};
