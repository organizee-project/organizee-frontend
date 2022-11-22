import { UserContext } from "contexts/user";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { useContext, useState } from "react";
import { useCreateGuide } from "services/guides";
import { IPostGuide } from "types/guide";

import AddGuideEdit from "./addEdit";

const AddGuideView = dynamic(() =>
  import("./addView").then((mod) => mod.AddGuideView)
);

export const AddGuide = () => {
  const router = useRouter();
  const [edit, setEdit] = useState(true);
  const [guide, setGuide] = useState<IPostGuide>({
    title: "",
    categories: [],
    topics: [],
    content: [],
    isPrivate: false,
    imgUrl: "",
    subtitle: "",
    references: [],
  });

  const { refreshToken } = useContext(UserContext);
  const { mutate } = useCreateGuide({
    onSuccess: ({ slug }) => {
      router.push("/" + slug);
    },
  });

  const onSave = (newGuide) => {
    refreshToken(() => {
      mutate(newGuide);
    });
  };

  return (
    <>
      <AddGuideEdit
        setFinalGuide={setGuide}
        onSave={onSave}
        setEdit={setEdit}
        show={edit}
      />
      {!edit && (
        <AddGuideView
          guide={guide}
          setEdit={setEdit}
          show={!edit}
          onSave={onSave}
        />
      )}
    </>
  );
};
