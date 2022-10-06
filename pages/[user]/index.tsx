import { useRouter } from "next/router";

const Guide = () => {
  const router = useRouter();
  const { user } = router.query;

  return <h1>Sou o {user}</h1>;
};

export default Guide;
