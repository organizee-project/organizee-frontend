import { useEffect, useState, FormEvent } from "react";

import Link from "next/link";
import { getSuggestions } from "services/search";
import { Input, ContainerOptions } from "./styles";
import { useRouter } from "next/router";

export const HeaderInput = () => {
  const router = useRouter();
  const [q, setQ] = useState("");
  const [options, setOptions] = useState([]);

  useEffect(() => {
    setQ("");
  }, [router.query]);

  useEffect(() => {
    if (q.length === 0) return;

    const delay = setTimeout(async () => {
      const response = await getSuggestions(q);
      setOptions(response);
    }, 1200);

    return () => clearTimeout(delay);
  }, [q]);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (q.length === 0) return;

    setQ("");
    router.push("/search/" + q);
  };

  return (
    <form onSubmit={onSubmit}>
      <Input onChange={({ target }) => setQ(target.value)} />
      <ContainerOptions>
        {options.map((option) => (
          <Link href={`/search/${option}`} key={option}>
            <div>{option}</div>
          </Link>
        ))}
      </ContainerOptions>
    </form>
  );
};
