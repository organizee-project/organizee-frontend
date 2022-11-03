import { useEffect, useState } from "react";
import { LoginStyle } from "styles/global";
import { Form, Field } from "components/form";
import { Button } from "components/button";

import {
  auth,
  logInWithEmailAndPassword,
  signInWithGoogle,
} from "utils/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useRouter } from "next/router";
import { getUser } from "services/users";
import { useCookie } from "utils/hooks";
import { Paragraph } from "styles";

export const SignIn = () => {
  const router = useRouter();
  const { setCookie } = useCookie("user");
  const { setCookie: setToken } = useCookie("token");
  const [user, loading] = useAuthState(auth);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const login = async () => {
    try {
      user.getIdToken().then(async (token) => {
        setToken(token);
        const data = await getUser();
        setCookie(data.user);
        router.push("/");
      });
    } catch {
      setMessage("Usuário não encontrado");
    }
  };

  useEffect(() => {
    if (loading) return;

    if (user) {
      login();
    }
  }, [user, loading]);

  return (
    <>
      <LoginStyle />
      <Form
        title="Faça seu login"
        secondaryTitle="Novo por aqui?"
        linkText="Crie sua conta"
        link="/signup"
      >
        <Field
          variant="outline"
          label="Endereço de email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Field
          variant="outline"
          label="Senha"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button
          variant="pink"
          width="100%"
          onClick={() => logInWithEmailAndPassword(email, password)}
        >
          Fazer Login
        </Button>
        <Button variant="pink" width="100%" onClick={signInWithGoogle}>
          Continuar com o Google
        </Button>
        <Paragraph
          fontSize="10px"
          color="red"
          height="24px"
          textAlign="center"
          mb="0px"
          mt="20px"
        >
          {message}
        </Paragraph>
      </Form>
    </>
  );
};
