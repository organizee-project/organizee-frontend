import { Button } from "components/button";
import { useRouter } from "next/router";
import { Flex, Paragraph, Title } from "styles";
import { Modal, Background } from "../styles";

export const ModalLogin = ({ onClose, open }: IProps) => {
  const router = useRouter();

  return (
    <Background open={open} onClick={onClose} className="pointer">
      <Modal>
        <Title textAlign="center">Faça o login</Title>
        <Paragraph textAlign="center" mb="20px">
          Para concluir essa ação é necessário efetur o login.
        </Paragraph>
        <Flex>
          <Button
            variant="pink"
            width="100%"
            onClick={() => router.push("/signin")}
          >
            Fazer login
          </Button>
          <Button
            variant="blue"
            width="100%"
            onClick={() => router.push("/signup")}
          >
            Criar conta
          </Button>
        </Flex>
      </Modal>
    </Background>
  );
};

interface IProps {
  onClose: () => void;
  open: boolean;
}
