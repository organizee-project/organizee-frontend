import { useState, useEffect } from "react";
import { AddStyles } from "styles/global";
import { OpenDiv } from "styles/styles";

import {
  Container,
  Label,
  Input,
  Area,
  AddInput,
  Selected,
  Select,
  Item,
  FlexWrap,
} from "./styles";

import { BsX } from "react-icons/bs";

const AddGuide = () => {
  const [selectedItems, setSelectedItems] = useState([]);
  const [topic, setTopic] = useState("");
  const [topics, setTopics] = useState([]);

  const onClickItem = (item) => {
    setSelectedItems([...selectedItems, item]);
  };

  const onRemoveItem = (item) => {
    setSelectedItems(selectedItems.filter((sel) => sel != item));
  };

  const onClickTopic = () => {
    setTopics([...topics, topic]);
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
            onClickItem={onClickItem}
            selectedItems={selectedItems}
          />
          <FlexWrap>
            {selectedItems.map((item) => (
              <Item
                key={"selected" + item.id}
                onClick={() => onRemoveItem(item)}
              >
                {item.name} <BsX size="22px" />
              </Item>
            ))}
          </FlexWrap>
        </Area>
        <Area area="topics">
          <Label>Tópicos abordados</Label>
          <AddInput
            type="text"
            value={topic}
            onChange={({ target }) => setTopic(target.value)}
          />
          <span onClick={() => onClickTopic()}>+</span>
          <FlexWrap>
            {topics.map((item) => (
              <Item
                key={"selected" + item.id}
                onClick={() => onRemoveTopic(item)}
              >
                {item} <BsX size="22px" />
              </Item>
            ))}
          </FlexWrap>
        </Area>
      </Container>
    </>
  );
};

const Autocomplete = ({ onClickItem, selectedItems }) => {
  const [text, setText] = useState("");
  const [originalItems, setOriginalItems] = useState([
    { id: "arte", name: "arte" },
    { id: "europa", name: "europa" },
    { id: "america-latina", name: "américa latina" },
  ]);
  const [items, setItems] = useState([]);
  const [open, setOpen] = useState(false);

  const onClickAdd = () => {
    if (text.trim() === "") return;

    setText("");
    onClickItem({ name: text });
  };

  useEffect(() => {
    setItems(
      originalItems.filter(
        (item) => !selectedItems.includes(item) && item.name.includes(text)
      )
    );
  }, [selectedItems, text, originalItems]);

  return (
    <>
      <div>
        <AddInput
          type="text"
          value={text}
          onChange={({ target }) => setText(target.value)}
          onFocus={() => items.length > 0 && setOpen(true)}
        />
        <span onClick={() => onClickAdd()}>+</span>
        {items.length > 0 && (
          <Select open={open}>
            {items.map((item) => (
              <div key={item.id} onClick={() => onClickItem(item)}>
                {item.name}
              </div>
            ))}
          </Select>
        )}
      </div>
      <OpenDiv open={open} onClick={() => setOpen(false)} />
    </>
  );
};

export default AddGuide;
