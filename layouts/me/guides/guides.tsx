import { Guide } from "components/guide";
import { Add } from "components/button";
import { GuideContainer } from "./styles";

export const Guides = () => {
  const guides = [
    {
      id: 1,
      name: "Como a América Latina impactou na religião moderna",
      author_name: "Nome Sobrenome",
      img_url: "https://images.unsplash.com/photo-1493612276216-ee3925520721",
      slug: "aaaaa",
      is_private: true,
    },
    {
      id: 2,
      name: "Como a América Latina impactou na religião moderna",
      author_name: "Nome Sobrenome",
      img_url: "https://images.unsplash.com/photo-1508138221679-760a23a2285b",
      slug: "aaaaa",
      is_private: true,
    },
    {
      id: 3,
      name: "Como a América Latina impactou na religião moderna",
      author_name: "Nome Sobrenome",
      img_url: "https://images.unsplash.com/photo-1502230831726-fe5549140034",
      slug: "aaaaa",
      is_private: true,
    },
    {
      id: 4,
      name: "Como a América Latina impactou na religião moderna",
      author_name: "Nome Sobrenome",
      img_url: "https://images.unsplash.com/photo-1477414348463-c0eb7f1359b6",
      slug: "aaaaa",
      is_private: true,
    },
    {
      id: 5,
      name: "Como a América Latina impactou na religião moderna",
      author_name: "Nome Sobrenome",
      img_url: "https://images.unsplash.com/photo-1473172707857-f9e276582ab6",
      slug: "aaaaa",
      is_private: true,
    },
    {
      id: 6,
      name: "Como a América Latina impactou na religião moderna",
      author_name: "Nome Sobrenome",
      img_url: "https://images.unsplash.com/photo-1468487422149-5edc5034604f",
      slug: "aaaaa",
      is_private: false,
    },
    {
      id: 7,
      name: "Como a América Latina impactou na religião moderna",
      author_name: "Nome Sobrenome",
      img_url: "https://images.unsplash.com/photo-1499244571948-7ccddb3583f1",
      slug: "aaaaa",
      is_private: false,
    },
    {
      id: 8,
      name: "Como a América Latina impactou na religião moderna",
      author_name: "Nome Sobrenome",
      img_url: "https://images.unsplash.com/photo-1503751071777-d2918b21bbd9",
      slug: "aaaaa",
      is_private: true,
    },
  ];

  return (
    <>
      <GuideContainer>
        {guides.map((guide) => (
          <Guide key={guide.id} guide={guide} />
        ))}
      </GuideContainer>
      <Add />
    </>
  );
};
