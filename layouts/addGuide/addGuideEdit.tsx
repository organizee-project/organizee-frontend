import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

import { ContainerEdit, Label, Input, Area, Item } from "./styles";

import { BsX } from "react-icons/bs";
import { AddInput } from "components/input";
import { Button } from "components/button";
import { Flex } from "styles/styles";

const AddGuideEditor = dynamic(import("./addGuideEditEditor"), { ssr: false });

const AddGuideEdit = ({ setFinalGuide, onSave, setEdit, show }) => {
  const [guide, setGuide] = useState({
    title: "",
    tags: [],
    topics: [],
    content: [],
  });

  const [files, setFiles] = useState([]);

  const [optionsTag, setOptionsTag] = useState([
    { id: "arte", name: "arte" },
    { id: "europa", name: "europa" },
    { id: "america-latina", name: "américa latina" },
  ]);

  const onClickTag = (item) => {
    const tags = item.id
      ? [...guide.tags, item]
      : [...guide.tags, { name: item }];

    setGuide({ ...guide, tags });
  };

  const onRemoveTag = (item) => {
    const tags = guide.tags.filter((sel) => sel != item);
    setGuide({ ...guide, tags });
  };

  const onClickTopic = (text: string) => {
    const topics = [...guide.topics, text];
    setGuide({ ...guide, topics });
  };

  const onRemoveTopic = (item) => {
    const topics = guide.topics.filter((sel) => sel != item);
    setGuide({ ...guide, topics });
  };

  const onContentChange = (content) => {
    setGuide((old) => {
      return { ...old, content };
    });
  };

  const onFilesChange = (file) => {
    setFiles([...files, file]);
  };

  const prepareGuide = () => {
    const existingImages = guide.content.filter(
      (item) => item.type === "image"
    );

    const imagesToUpload = files.filter((file) =>
      existingImages.some((img) => img.data.file.url === file.url)
    );

    // post das imagens para API
    // formatar o guide com as novas urls

    onSave(guide);
  };

  const onVisualization = () => {
    setFinalGuide(guide);
    setEdit(false);
  };

  return (
    <ContainerEdit open={show}>
      <Area area="title">
        <Label>Título da trilha</Label>
        <Input
          type="text"
          onChange={({ target }) => setGuide({ ...guide, title: target.value })}
        />
      </Area>
      <Area area="buttons">
        <Flex justify="flex-end">
          <Flex width="300px">
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
        <Label>Tags</Label>
        <AddInput
          onClickItem={onClickTag}
          selectedItems={guide.tags}
          originalItems={optionsTag}
        />
        <Flex justify="flex-start">
          {guide.tags.map((item, i) => (
            <Item key={"tags" + i} onClick={() => onRemoveTag(item)}>
              {item.name} <BsX size="22px" />
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
        <Flex justify="flex-start">
          {guide.topics.map((item, i) => (
            <Item key={"topics" + i} onClick={() => onRemoveTopic(item)}>
              {item} <BsX size="22px" />
            </Item>
          ))}
        </Flex>
      </Area>
      <Area area="editor">
        <Label>Conteúdo</Label>
        <AddGuideEditor setContent={onContentChange} setFiles={onFilesChange} />
      </Area>
    </ContainerEdit>
  );
};

export default AddGuideEdit;
