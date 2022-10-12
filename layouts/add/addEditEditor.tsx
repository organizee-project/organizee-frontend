import { useEffect, useRef, useState } from "react";
import { Editor } from "./styles";

import EditorJS from "@editorjs/editorjs";
import Header from "@editorjs/header";
import Quote from "@editorjs/quote";
import Table from "@editorjs/table";
import Code from "@editorjs/code";
import Image from "@editorjs/image";

import { ToogleList } from "components/editorTools";

const AddGuideEditor = ({ setContent, setFiles }) => {
  const ejInstance = useRef<any>();

  useEffect(() => {
    if (!ejInstance.current) {
      initEditor();
    }
    return () => {
      ejInstance.current?.destroy();
      ejInstance.current = null;
    };
  }, []);

  async function handleSave() {
    const savedData = await ejInstance.current?.save();
    setContent(savedData.blocks);
  }

  const initEditor = () => {
    const editor = new EditorJS({
      holder: "editorjs",
      onReady: () => {
        ejInstance.current = editor;
        const renders = document.getElementsByClassName("codex-editor");
        if (renders.length > 1) {
          renders[0].parentNode.removeChild(renders[0]);
        }
      },
      onChange: () => {
        handleSave();
      },
      tools: {
        header: Header,
        quote: {
          class: Quote,
          inlineToolbar: false,
          config: {
            quotePlaceholder: "Digite uma citação",
            captionPlaceholder: "Digite o autor da citação (opcional)",
          },
        },
        table: Table,
        image: {
          class: Image,
          config: {
            uploader: {
              async uploadByFile(file) {
                const formData = new FormData();
                formData.append("image", file);

                const url = URL.createObjectURL(file);
                setFiles({ url, file });

                return {
                  success: 1,
                  file: {
                    url,
                  },
                };
              },
            },
          },
        },
        toogle: ToogleList,
        code: Code,
      },
      i18n: {
        messages: {
          toolNames: {
            Quote: "Citação",
            Text: "Parágrafo",
            Heading: "Título",
            Table: "Tabela",
            Image: "Imagem",
            Code: "Código",
            Bold: "Negrito",
            Italic: "Itálico",
          },
          ui: {
            blockTunes: {
              toggler: {
                "Click to tune": "Clique para editar",
              },
            },
            toolbar: {
              toolbox: {
                Add: "Adicionar",
                Filter: "Filtrar",
              },
            },
            inlineToolbar: {
              converter: {
                "Convert to": "Transformar em",
              },
            },
          },
          blockTunes: {
            delete: {
              Delete: "Deletar",
            },
            moveUp: {
              "Move up": "Subir",
            },
            moveDown: {
              "Move down": "Descer",
            },
          },
          tools: {
            table: {
              "Add row above": "Adicionar linha acima",
              "Add row below": "Adicionar linha abaixo",
              "Delete row": "Deletar linha",
              "Add column to left": "Adicionar coluna a esquerda",
              "Add column to right": "Adicionar coluna a direita",
              "Delete column": "Deletar coluna",
              "With headings": "Com cabeçalho",
              "Without headings": "Sem cabeçalho",
            },
            code: {
              "Enter a code": "Digite o código",
            },
            image: {
              "Select an Image": "Selecione uma imagem",
              Caption: "Legenda (opcional)",
              "With border": "Com bordas",
              "Stretch Image": "Alongar imagem",
              "With background": "Adicionar fundo",
            },
          },
        },
      },
      data: {
        time: 1552744582955,
        blocks: [
          {
            type: "paragraph",
            data: {
              text: "Digite seu conteúdo aqui!",
            },
          },
        ],
        version: "2.11.10",
      },
      minHeight: 300,
    });
  };

  return <Editor id="editorjs" />;
};

export default AddGuideEditor;
