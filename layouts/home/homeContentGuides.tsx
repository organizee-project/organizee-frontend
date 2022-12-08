import { Container } from "./styles";
import { Guide } from "components/guide";
import { useGuidesList } from "services/guides";
import { Add } from "components/button";
import { useCallback, useContext, useEffect, useState } from "react";
import { AuthContext } from "contexts/auth";
import { Paragraph } from "styles";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";

interface IModalProps {
  onClose: () => void;
  open: boolean;
}

const ModalLogin = dynamic<IModalProps>(() =>
  import("components/modal").then((mod) => mod.ModalLogin)
);

export const Guides = ({ sortBy, category }: Props) => {
  const [showLogin, setShowLogin] = useState(false);
  const [token, setToken] = useState(false);
  const { user, refreshToken } = useContext(AuthContext);

  const router = useRouter();

  const { isLoading, isFetchingNextPage, data, fetchNextPage, hasNextPage } =
    useGuidesList(sortBy, category, {
      enabled: !!(token && user) || category !== "follows",
    });

  useEffect(() => {
    if (user && category === "follows")
      refreshToken(() => {
        setToken(true);
      });
  }, [category]);

  const createGuide = useCallback(() => {
    if (user) router.push("user/add");
    else setShowLogin(true);
  }, [user]);

  return (
    <>
      <Container>
        {data && data.pages[0].count === 0 && (
          <Paragraph>
            Não há trilhas cadastradas para essa categoria, deseja{" "}
            <span onClick={createGuide}>criar</span>?
          </Paragraph>
        )}
        {data &&
          data.pages.map((page) =>
            page.items.map((guide) => <Guide key={guide.slug} guide={guide} />)
          )}
        {(isLoading || isFetchingNextPage) &&
          Array.from({ length: 12 }).map((_, i) => (
            <Guide isLoading={true} key={i} />
          ))}
      </Container>
      {!isLoading && hasNextPage && <Add onClick={fetchNextPage} />}
      {showLogin && (
        <ModalLogin
          onClose={() => {
            setShowLogin(false);
          }}
          open={showLogin}
        />
      )}
    </>
  );
};

interface Props {
  sortBy: string;
  category: string;
}
