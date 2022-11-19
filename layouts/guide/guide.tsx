import { useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";

import { LayoutGuide } from "components/layouts";

import { Flex } from "styles";

import {
  BsBookmark,
  BsBookmarkFill,
  BsHeart,
  BsHeartFill,
} from "react-icons/bs";

import { GuideComments } from "./guideComments";

import {
  useGuideBySlug,
  useGuideInteractions,
  useSaveGuide,
  useUnsaveGuide,
  useLikeGuide,
  useUnlikeGuide,
} from "services/guides";
import { GuideSuggestions } from "./guideSuggestions";
import { UserContext } from "contexts/user";
import { ModalLogin } from "components/modal";

export const Guide = () => {
  const { user } = useContext(UserContext);
  const [showLoginMessage, setShowLoginMessage] = useState(false);

  const router = useRouter();
  const { slug } = router.query;

  const { data, isLoading } = useGuideBySlug(slug as string, {
    enabled: !!slug,
  });
  const { data: interactions } = useGuideInteractions(slug as string, {
    enabled: !!slug && !!user,
  });

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

  const [liked, setLiked] = useState(false);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    if (interactions) {
      setLiked(interactions.liked);
      setSaved(interactions.saved);
    }
  }, [interactions]);

  const showLogin = () => {
    if (!user) {
      setShowLoginMessage(true);
      return true;
    }

    return false;
  };

  const onClickSave = () => {
    if (showLogin()) return;

    if (saved) unsaveGuide(slug);
    else saveGuide(slug);
  };

  const onClickLike = () => {
    if (showLogin()) return;

    if (liked) unlikeGuide(slug);
    else likeGuide(slug);
  };

  if (isLoading || !data) return <></>;

  return (
    <>
      <LayoutGuide guide={data}>
        <Flex width="80px" justifyContent="space-between">
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
        </Flex>
      </LayoutGuide>
      <GuideSuggestions categories={data.categories} />
      <GuideComments showLogin={showLogin} />
      <ModalLogin
        onClose={() => {
          setShowLoginMessage(false);
        }}
        open={showLoginMessage}
      />
    </>
  );
};
