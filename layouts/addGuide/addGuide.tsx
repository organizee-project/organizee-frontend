import { useState } from "react";

import AddGuideEdit from "./addGuideEdit";
import { AddGuideView } from "./addGuideView";

const AddGuide = () => {
  const [edit, setEdit] = useState(true);
  const [guide, setGuide] = useState({
    title: "",
    tags: [],
    topics: [],
    content: [],
  });

  const onSave = (newGuide) => {
    console.log(newGuide);
  };

  return (
    <>
      {edit ? (
        <AddGuideEdit
          setFinalGuide={setGuide}
          onSave={onSave}
          setEdit={setEdit}
        />
      ) : (
        <AddGuideView guide={guide} setEdit={setEdit} />
      )}
    </>
  );
};

export default AddGuide;
