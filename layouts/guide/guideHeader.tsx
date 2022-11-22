import { useContext, useEffect, useState } from "react";

import { UserContext } from "contexts/user";

import {
  useGuideInteractions,
  useSaveGuide,
  useUnsaveGuide,
  useLikeGuide,
  useUnlikeGuide,
} from "services/guides";
import { Flex } from "styles";

import {
  BsBookmark,
  BsBookmarkFill,
  BsHeart,
  BsHeartFill,
} from "react-icons/bs";

export const GuideHeader = ({ slug, showLogin }: IProps) => {
  const [token, setToken] = useState(false);
  const [liked, setLiked] = useState(false);
  const [saved, setSaved] = useState(false);

  const { user, refreshToken } = useContext(UserContext);

  const { data: interactions } = useGuideInteractions(slug as string, {
    enabled: !!slug && !!token,
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

  useEffect(() => {
    if (user)
      refreshToken(() => {
        setToken(true);
      });
  }, []);

  useEffect(() => {
    if (interactions) {
      setLiked(interactions.liked);
      setSaved(interactions.saved);
    }
  }, [interactions]);

  const onClickSave = () => {
    if (showLogin()) return;

    refreshToken(() => {
      if (saved) unsaveGuide(slug);
      else saveGuide(slug);
    });
  };

  const onClickLike = () => {
    if (showLogin()) return;

    refreshToken(() => {
      if (liked) unlikeGuide(slug);
      else likeGuide(slug);
    });
  };

  return (
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
  );
};

interface IProps {
  slug: string;
  showLogin: () => boolean;
}
