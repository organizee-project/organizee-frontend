import { useEffect, useState } from "react";

import { LoginStyle } from "styles/global";
import { Form, Field } from "components/form";
import { Button } from "components/button";

import { useAuthState } from "react-firebase-hooks/auth";

import {
  auth,
  registerWithEmailAndPassword,
  signInWithGoogle,
} from "utils/firebase";
import { useRouter } from "next/router";

export const SignUp = () => {
  const router = useRouter();

  const [inputs, setInputs] = useState({
    email: "",
    name: "",
    username: "",
    password: "",
    confirmPassword: "",
  } as IInputs);

  const [user, loading, error] = useAuthState(auth);

  useEffect(() => {
    if (loading) return;

    if (user) {
      router.push("/");
    }
  }, [user, loading]);

  const handleOnChange = ({ target }, key) => {
    setInputs({ ...inputs, [key]: target.value });
  };

  const register = () => {
    registerWithEmailAndPassword(inputs.name, inputs.email, inputs.password);
  };

  return (
    <LoginStyle>
      <Form
        title="Criar uma conta"
        secondaryTitle="Já tem uma conta?"
        linkText="Faça o login!"
        link="/signin"
      >
        <Field
          variant="outline"
          label="Endereço de email"
          type="email"
          value={inputs.email}
          onChange={(e) => handleOnChange(e, "email")}
        />
        <Field
          variant="outline"
          label="Nome completo"
          value={inputs.name}
          onChange={(e) => handleOnChange(e, "name")}
        />
        <Field
          variant="outline"
          label="Nome de Visualização"
          value={inputs.username}
          onChange={(e) => handleOnChange(e, "username")}
        />
        <Field
          variant="outline"
          label="Senha"
          type="password"
          valid={inputs.password?.length > 7}
          required="Sua senha precisa ter no mínimo 8 dígitos"
          value={inputs.password}
          onChange={(e) => handleOnChange(e, "password")}
        />
        <Field
          variant="outline"
          label="Confirmar Senha"
          type="password"
          valid={inputs.confirmPassword === inputs.password}
          required="As senhas não batem"
          value={inputs.confirmPassword}
          onChange={(e) => handleOnChange(e, "confirmPassword")}
        />
        <Button variant="pink" onClick={register}>
          Criar conta
        </Button>
        <Button variant="pink" onClick={signInWithGoogle}>
          Continuar com o Google
        </Button>
      </Form>
    </LoginStyle>
  );
};

interface IInputs {
  email: string;
  name: string;
  username: string;
  password: string;
  confirmPassword: string;
}
