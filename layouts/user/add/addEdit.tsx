import dynamic from "next/dynamic";
import { useCallback, useContext, useEffect, useState } from "react";

import { ContainerEdit, Label, Input, Area, Item } from "./styles";

import { BsX } from "react-icons/bs";
import { AddInput } from "components/input";
import { Button } from "components/button";
import { Flex, Span } from "styles";
import { FileInput } from "components/fileInput";
import { Check } from "components/check";
import { ICategory, IPostGuide, IFile } from "types/guide";
import { useCategories } from "services/categories";
import { AuthContext } from "contexts/auth";
import { saveGuideImages } from "utils/guide";

import { toast } from "react-toastify";

const AddGuideEditor = dynamic(() => import("./addEditEditor"), { ssr: false });

const AddGuideEdit = ({ setFinalGuide, onSave, setEdit, show }) => {
  const [poster, setPoster] = useState<File>(null);
  const { data: categories, isLoading } = useCategories();
  const { user, refreshToken } = useContext(AuthContext);

  const [guide, setGuide] = useState<IPostGuide>({
    title: "",
    subtitle: "",
    references: [],
    categories: [],
    topics: [],
    content: { blocks: [] },
    isPrivate: false,
    imgUrl: "",
  });

  const onClickTag = (item: ICategory | string) => {
    if (typeof item === "string") return;
    const categories = [...guide.categories, item.id];

    setGuide({ ...guide, categories });
  };

  const onRemoveTag = (item) => {
    const categories = guide.categories.filter((sel) => sel != item);
    setGuide({ ...guide, categories });
  };

  const onClickTopic = (text: string) => {
    const topics = [...guide.topics, text];
    setGuide({ ...guide, topics });
  };

  const onRemoveTopic = (item) => {
    const topics = guide.topics.filter((sel) => sel != item);
    setGuide({ ...guide, topics });
  };

  const onClickRef = (url: string) => {
    const references = [...guide.references, { url }];
    setGuide({ ...guide, references });
  };

  const onRemoveRef = (item) => {
    const references = guide.references.filter((sel) => sel != item);
    setGuide({ ...guide, references });
  };

  const onContentChange = (content) => {
    setGuide((old) => {
      return { ...old, content };
    });
  };

  const onImgChange = (file) => {
    setPoster(file);
  };

  const prepareGuide = useCallback(() => {
    if (guide.title === "") {
      toast.error("Preencha o título");
      return;
    }

    if (guide.categories.length === 0) {
      toast.error("Escolha ao menos uma categoria");
      return;
    }

    if (poster === null) {
      toast.error("Escolha uma capa para a trilha");
      return;
    }

    refreshToken(async () => {
      const newGuide = await saveGuideImages(guide, poster);
      newGuide.content = JSON.stringify(newGuide.content);
      onSave(newGuide);
    });
  }, [guide, poster]);

  const onVisualization = () => {
    const visualizationGuide = {
      ...guide,
      user,
      content: JSON.stringify(guide.content),
    };
    setFinalGuide(visualizationGuide);
    setEdit(false);
  };

  if (isLoading) return <></>;

  return (
    <ContainerEdit open={show}>
      <Area area="title">
        <Label>
          Título da trilha <Span color="var(--pink)">*</Span>
        </Label>
        <Input
          type="text"
          onChange={({ target }) => setGuide({ ...guide, title: target.value })}
        />
      </Area>
      <Area area="private">
        <Label>
          Privar trilha <Span color="var(--pink)">*</Span>
        </Label>
        <Flex justifyContent="flex-start">
          <Check
            text="Sim"
            active={guide.isPrivate}
            onClick={() => setGuide({ ...guide, isPrivate: true })}
          />
          <Check
            text="Não"
            active={!guide.isPrivate}
            onClick={() => setGuide({ ...guide, isPrivate: false })}
          />
        </Flex>
      </Area>
      <Area area="buttons">
        <Flex justifyContent="flex-end">
          <Flex
            width="300px"
            justifyContent="space-between"
            alignItems="flex-start"
          >
            <Button variant="blue" width="45%" onClick={onVisualization}>
              Visualizar
            </Button>
            <Button variant="blue" width="45%" onClick={prepareGuide}>
              Publicar
            </Button>
          </Flex>
        </Flex>
      </Area>
      <Area area="tags">
        <Label>
          Categorias <Span color="var(--pink)">*</Span>
        </Label>
        <AddInput
          onClickItem={onClickTag}
          selectedItems={guide.categories}
          originalItems={categories}
        />
        <Flex justifyContent="flex-start">
          {guide.categories.map((item, i) => (
            <Item key={"categories" + i} onClick={() => onRemoveTag(item)}>
              {categories.filter((category) => category.id === item)[0].name}{" "}
              <BsX size="22px" />
            </Item>
          ))}
        </Flex>
      </Area>
      <Area area="topics">
        <Label>Tópicos abordados</Label>
        <AddInput
          onClickItem={onClickTopic}
          selectedItems={guide.topics}
          originalItems={[]}
        />
        <Flex justifyContent="flex-start">
          {guide.topics.map((item, i) => (
            <Item key={"topics" + i} onClick={() => onRemoveTopic(item)}>
              {item} <BsX size="22px" />
            </Item>
          ))}
        </Flex>
      </Area>
      <Area area="img">
        <Label>
          Capa da trilha <Span color="var(--pink)">*</Span>
        </Label>
        <FileInput onChangeFile={(imgUrl) => onImgChange(imgUrl)} />
      </Area>
      <Area area="refs" big={true}>
        <Label>Referências</Label>
        <AddInput
          onClickItem={onClickRef}
          selectedItems={guide.references}
          originalItems={[]}
          small={false}
        />
        <Flex justifyContent="flex-start">
          {guide.references.map((item, i) => (
            <Item key={"ref" + i} onClick={() => onRemoveRef(item)}>
              <>
                {item.url} <BsX size="22px" />
              </>
            </Item>
          ))}
        </Flex>
      </Area>
      <Area area="editor">
        <Label>
          Conteúdo <Span color="var(--pink)">*</Span>
        </Label>
        <AddGuideEditor setContent={onContentChange} />
      </Area>
    </ContainerEdit>
  );
};

export default AddGuideEdit;
