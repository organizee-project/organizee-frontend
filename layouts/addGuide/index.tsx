import { useState, useEffect } from "react";
import { AddStyles } from "styles/global";
import { OpenDiv } from "styles/styles";

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
  const [selectedTags, setSelectedTags] = useState([
    { id: "b", name: "b" },
    { name: "a" },
  ]);

  const [topics, setTopics] = useState([]);

  const onClickTag = (item) => {
    if (item.id) setSelectedTags([...selectedTags, item]);
    else setSelectedTags([...selectedTags, { name: item }]);
  };

  const onRemoveTag = (item) => {
    setSelectedTags(selectedTags.filter((sel) => sel != item));
  };

  const onClickTopic = (text: string) => {
    setTopics([...topics, text]);
  };

  const onRemoveTopic = (item) => {
    setTopics(topics.filter((sel) => sel != item));
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
            selectedItems={selectedTags}
            originalItems={optionsTag}
          />
          <FlexWrap>
            {selectedTags.map((item, i) => (
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
            selectedItems={topics}
            originalItems={[]}
          />
          <FlexWrap>
            {topics.map((item, i) => (
              <Item key={"topics" + i} onClick={() => onRemoveTopic(item)}>
                {item} <BsX size="22px" />
              </Item>
            ))}
          </FlexWrap>
        </Area>
        <Area area="editor">
          <Label>Conteúdo</Label>
          <AddGuideEditor />
        </Area>
      </Container>
    </>
  );
};

export default AddGuide;
