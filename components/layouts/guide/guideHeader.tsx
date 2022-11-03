import { EText } from "common/types/post";
import { Text } from "components/editorInterpreter";
import Link from "next/link";
import { Flex } from "styles";
import { IGuide } from "types/guide";
import { Categories } from "./styles";

export const LayoutHeader = ({ guide, children }: Props) => {
  return (
    <>
      <Flex justifyContent="space-between">
        <div>
          <Text type={EText.title}>{guide.title}</Text>

          <Text type={EText.author}>
            Por{" "}
            <Link href={`/${guide.user.username}`} className="link">
              {guide.user.name}
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
    </>
  );
};

interface Props {
  guide: IGuide;
  children: any;
}
