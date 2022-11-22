import { useEffect, useState, FormEvent } from "react";

import Link from "next/link";
import { getSuggestions } from "services/search";
import { Input, ContainerOptions, Form } from "./styles";
import { useRouter } from "next/router";
import { Flex } from "styles";

import { BsSearch } from "react-icons/bs";
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

  const onSubmit = () => {
    if (q.length === 0) return;

    setQ("");
    router.push("/search/" + q);
  };

  const onSubmitForm = (e: FormEvent) => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <Form onSubmit={onSubmitForm}>
      <Input onChange={({ target }) => setQ(target.value)} value={q} />
      {q != "" && (
        <ContainerOptions>
          {options.map((option) => (
            <Link href={`/search/${option}`} key={option}>
              <div>{option}</div>
            </Link>
          ))}
        </ContainerOptions>
      )}
      <Flex
        position="absolute"
        right="18px"
        top="8px"
        className="pointer"
        onClick={onSubmit}
      >
        <BsSearch color="var(--gray)" className="pointer" />
      </Flex>
    </Form>
  );
};
