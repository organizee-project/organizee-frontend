import Image from "next/image";
import { useState } from "react";

export const Picture = ({ image }) => {
  const [imageSize, setImageSize] = useState({
    width: 1,
    height: 1,
  });

  const handleImageSize = (width: number, height: number) => {
    if (width > 700) {
      const newHeight = height * (700 / width);

      setImageSize({ width: 700, height: newHeight });
      return;
    }

    setImageSize({ width, height });
  };

  return (
    <div
      style={{
        position: "relative",
        width: imageSize.width,
        height: imageSize.height,
        margin: "auto",
      }}
    >
      <Image
        src={image.url}
        alt={image.caption}
        layout="fill"
        onLoadingComplete={({ naturalWidth, naturalHeight }) => {
          handleImageSize(naturalWidth, naturalHeight);
        }}
      />
    </div>
  );
};
