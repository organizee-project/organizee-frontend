import { useContext, useEffect, useState } from "react";
import { LoginStyle } from "styles/global";
import { Form, Field } from "components/form";
import { Button } from "components/button";

import {
  auth,
  logInWithEmailAndPassword,
  signInWithGoogle,
} from "utils/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { Paragraph } from "styles";
import { AuthContext } from "contexts/auth";

export const SignIn = () => {
  const { login } = useContext(AuthContext);
  const [user, loading] = useAuthState(auth);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (loading) return;

    if (user) {
      try {
        login();
      } catch {
        setMessage("Usuário não encontrado");
      }
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
