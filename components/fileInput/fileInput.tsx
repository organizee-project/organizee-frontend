import { useState, useRef } from "react";

import { Container, Input, Text, Drag, Preview } from "./styles";

import Image from "next/image";

export const FileInput = ({ onChangeFile }) => {
  const [dragActive, setDragActive] = useState(false);
  const [preview, setPreview] = useState(null);

  const inputRef = useRef(null);

  const handleDrag = function (e) {
    e.preventDefault();
    e.stopPropagation();

    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = function (e) {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0];
      onChangeFile(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleChange = function (e) {
    e.preventDefault();

    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      onChangeFile(e.target.files[0]);
      setPreview(URL.createObjectURL(file));
    }
  };

  const onButtonClick = () => {
    if (inputRef.current) inputRef.current.click();
  };

  return (
    <Container onDragEnter={handleDrag} onDrop={handleDrop}>
      <Input
        ref={inputRef}
        type="file"
        onChange={handleChange}
        id="input-file"
      />
      {preview ? (
        <Preview>
          <Image src={preview} layout="fill" alt="capa da trilha" />
        </Preview>
      ) : (
        <Text htmlFor="input-file" className={dragActive ? "drag" : ""}>
          <p>Arraste um arquivo</p>
          <p>ou</p>
          <button onClick={onButtonClick}>Carregue um arquivo</button>
        </Text>
      )}

      {dragActive && (
        <Drag
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}
        />
      )}
    </Container>
  );
};
