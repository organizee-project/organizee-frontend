import { saveFile } from "services/guides";
import { IPostGuide } from "types/guide";

export const saveGuideImages = async (guide: IPostGuide, poster: File) => {
  const newGuide = guide;

  if (newGuide.imgUrl === "") {
    const { url } = await saveFile(poster as File);
    newGuide.imgUrl = url;
  }

  console.log("capa carregada");
  for (const item of newGuide.content.blocks) {
    if (item.type === "image") {
      console.log(
        "iniciar carregamento de imagem " + item.data.file.fileData.name
      );
      const { url } = await saveFile(item.data.file.fileData);
      console.log("imagem carregada");
      item.data.file.url = url;
      delete item.data.file["fileData"];
    }
  }

  return newGuide;
};
