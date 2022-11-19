import { saveFile } from "services/guides";
import { IPostGuide } from "types/guide";

export const saveGuideImages = async (guide: IPostGuide) => {
  const newGuide = guide;

  if (typeof newGuide.imgUrl !== "string") {
    const { url } = await saveFile(newGuide.imgUrl as File);
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
