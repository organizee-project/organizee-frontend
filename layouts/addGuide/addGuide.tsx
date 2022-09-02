import { useEffect, useState } from "react";

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
      <AddGuideEdit
        setFinalGuide={setGuide}
        onSave={onSave}
        setEdit={setEdit}
        show={edit}
      />
      <AddGuideView
        guide={guide}
        setEdit={setEdit}
        show={!edit}
        onSave={onSave}
      />
    </>
  );
};

export default AddGuide;
