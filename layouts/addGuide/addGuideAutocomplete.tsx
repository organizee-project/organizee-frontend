import { useEffect, useState } from "react";
import { OpenDiv } from "styles/styles";
import { AddInput, Select } from "./styles";

export const Autocomplete = ({ onClickItem, selectedItems, originalItems }) => {
  const [text, setText] = useState("");
  const [items, setItems] = useState([]);
  const [open, setOpen] = useState(false);

  const onClickAdd = () => {
    if (text.trim() === "") return;

    onClickItem(text);
    setText("");
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
        <span onClick={() => onClickAdd()} className="add">
          +
        </span>
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
