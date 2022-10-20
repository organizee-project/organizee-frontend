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

export const SignIn = () => {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [user, loading, error] = useAuthState(auth);

  useEffect(() => {
    if (loading) return;

    if (user) {
      router.push("/");
    }
  }, [user, loading]);

  return (
    <LoginStyle>
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
          onClick={() => logInWithEmailAndPassword(email, password)}
        >
          Fazer Login
        </Button>
        <Button variant="pink" onClick={signInWithGoogle}>
          Continuar com o Google
        </Button>
      </Form>
    </LoginStyle>
  );
};
