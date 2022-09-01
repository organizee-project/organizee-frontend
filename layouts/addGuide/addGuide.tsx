import { useState } from "react";
import { AddStyles } from "styles/global";

import { Container, Label, Input, Area, Item, FlexWrap } from "./styles";

import { BsX } from "react-icons/bs";
import { Autocomplete } from "./addGuideAutocomplete";

import dynamic from "next/dynamic";

const AddGuideEditor = dynamic(import("./addGuideEditor"), { ssr: false });

const AddGuide = () => {
  const [optionsTag, setOptionsTag] = useState([
    { id: "arte", name: "arte" },
    { id: "europa", name: "europa" },
    { id: "america-latina", name: "américa latina" },
  ]);

  const [files, setFiles] = useState([]);
  const [guide, setGuide] = useState({
    title: "",
    subtitle: "",
    tags: [],
    topics: [],
    content: [],
  });

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
    setGuide({ ...guide, content });
  };

  const onFilesChange = (file) => {
    console.log(files);
    setFiles([...files, file]);
  };

  const onSave = () => {
    const existingImages = guide.content.filter(
      (item) => item.type === "image"
    );

    const imagesToUpload = files.filter((file) =>
      existingImages.some((img) => img.data.file.url === file.url)
    );
  };

  return (
    <>
      <AddStyles />
      <Container>
        <Area area="title">
          <Label>Título da trilha</Label>
          <Input type="text" />
        </Area>
        <Area area="subtitle">
          <Label>Subtítulo da trilha</Label>
          <Input type="text" />
        </Area>
        <Area area="tags">
          <Label>Tags</Label>
          <Autocomplete
            onClickItem={onClickTag}
            selectedItems={guide.tags}
            originalItems={optionsTag}
          />
          <FlexWrap>
            {guide.tags.map((item, i) => (
              <Item key={"tags" + i} onClick={() => onRemoveTag(item)}>
                {item.name} <BsX size="22px" />
              </Item>
            ))}
          </FlexWrap>
        </Area>
        <Area area="topics">
          <Label>Tópicos abordados</Label>
          <Autocomplete
            onClickItem={onClickTopic}
            selectedItems={guide.topics}
            originalItems={[]}
          />
          <FlexWrap>
            {guide.topics.map((item, i) => (
              <Item key={"topics" + i} onClick={() => onRemoveTopic(item)}>
                {item} <BsX size="22px" />
              </Item>
            ))}
          </FlexWrap>
        </Area>
        <Area area="editor">
          <Label>Conteúdo</Label>
          <AddGuideEditor
            setContent={onContentChange}
            setFiles={onFilesChange}
          />
        </Area>
      </Container>
      <button onClick={() => onSave()}>salvar</button>
    </>
  );
};

export default AddGuide;
