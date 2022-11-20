import { useContext, useState } from "react";
import { useRouter } from "next/router";

import { UserContext } from "contexts/user";
import { LayoutGuide } from "components/layouts";
import { ModalLogin } from "components/modal";

import { useGuideBySlug } from "services/guides";

import { GuideHeader } from "./guideHeader";
import { GuideComments } from "./guideComments";
import { GuideSuggestions } from "./guideSuggestions";

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
      <ModalLogin
        onClose={() => {
          setShowLoginMessage(false);
        }}
        open={showLoginMessage}
      />
    </>
  );
};
