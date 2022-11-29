import { useContext, useState } from "react";
import { useRouter } from "next/router";

import { UserContext } from "contexts/user";
import { LayoutGuide } from "components/layouts";

import { useGuideBySlug } from "services/guides";

import { GuideHeader } from "./guideHeader";
import { GuideComments } from "./guideComments";
import { GuideSuggestions } from "./guideSuggestions";
import dynamic from "next/dynamic";

const ModalLogin = dynamic(() =>
  import("components/modal").then((mod) => mod.ModalLogin)
);

export const Guide = () => {
  const { user } = useContext(UserContext);
  const [showLoginMessage, setShowLoginMessage] = useState(false);

  const router = useRouter();
  const { slug } = router.query;

  const { data, isLoading } = useGuideBySlug(slug as string, {
    enabled: !!slug,
  });

  const showLogin = () => {
    if (!user) {
      setShowLoginMessage(true);
      return true;
    }

    return false;
  };

  if (isLoading || !data) return <></>;

  return (
    <>
      <LayoutGuide guide={data}>
        <GuideHeader slug={slug as string} showLogin={showLogin} />
      </LayoutGuide>
      <GuideSuggestions categories={data.categories} />
      <GuideComments showLogin={showLogin} />
      {showLoginMessage && (
        <ModalLogin
          onClose={() => {
            setShowLoginMessage(false);
          }}
          open={showLoginMessage}
        />
      )}
    </>
  );
};
