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
import { useGuideBySlug, useGuideInteractions } from "services/guides";
import { useCookie } from "utils/hooks";

export const Guide = () => {
  const router = useRouter();
  const { getCookie } = useCookie("token");
  const { slug } = router.query;

  const { data: guide, isLoading } = useGuideBySlug(slug as string);
  const { data: interactions } = useGuideInteractions(slug as string);

  const [openOptions, setOpenOptions] = useState(false);
  const [liked, setLiked] = useState(false);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    if (interactions) {
      setLiked(interactions.liked);
      setSaved(interactions.saved);
    }
  }, [interactions]);

  if (isLoading) return <></>;

  return (
    <>
      <LayoutGuide guide={guide}>
        <Flex width="136px" justifyContent="space-between">
          <div onClick={() => setLiked(!liked)}>
            {liked ? (
              <BsHeartFill size="26px" className="pointer" />
            ) : (
              <BsHeart size="26px" className="pointer" />
            )}
          </div>
          <div onClick={() => setSaved(!saved)}>
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
      <GuideComments comments={[]} />
    </>
  );
};
