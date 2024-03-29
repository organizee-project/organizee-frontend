import { EText } from "types/post";
import { Text } from "components/editorInterpreter";
import Link from "next/link";
import { Flex, Title3 } from "styles";
import { IGuide } from "types/guide";
import { Categories, Topics } from "./styles";

export const LayoutHeader = ({ guide, children }: Props) => {
  return (
    <>
      <Flex justifyContent="space-between">
        <div>
          <Text type={EText.title}>{guide.title}</Text>

          <Text type={EText.author}>
            Por{" "}
            <Link href={`/user/${guide.user.username}`} className="link">
              {guide.user.name ?? guide.user.username}
            </Link>
          </Text>
        </div>
        {children}
      </Flex>
      <Categories>
        {guide.categories.map((category, i) => (
          <li key={i}>{category.name}</li>
        ))}
      </Categories>
      <Title3>Tópicos abordados</Title3>
      <Topics>
        {guide.topics.map((topic, i) => (
          <li key={i}>{topic}</li>
        ))}
      </Topics>
    </>
  );
};

interface Props {
  guide: IGuide;
  children: any;
}
