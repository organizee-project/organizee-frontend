import { useState } from "react";
import { BsChevronRight, BsChevronDown } from "react-icons/bs";
import { FlexStart, Title, Description } from "./styles";

const DEFAULT_INITIAL_DATA = () => {
  return { title: "Title", description: "Description" };
};

const ToogleListComponent = (props) => {
  const [hide, setHide] = useState(false);
  const [list, setList] = useState(
    props.data.title ? props.data : DEFAULT_INITIAL_DATA
  );

  const updateList = (newData) => {
    setList(newData);
    if (props.onDataChange) {
      props.onDataChange(newData);
    }
  };

  const onContentChange = (fieldName) => {
    return (e) => {
      const newData = {
        ...list,
      };
      newData[fieldName] = e.currentTarget.textContent;
      updateList(newData);
    };
  };

  return (
    <>
      <div>
        <div>
          <div>
            <FlexStart>
              {hide ? (
                <BsChevronRight
                  className="pointer"
                  onClick={() => setHide(!hide)}
                />
              ) : (
                <BsChevronDown
                  className="pointer"
                  onClick={() => setHide(!hide)}
                />
              )}
              <Title
                color="textSecondary"
                onBlur={onContentChange("title")}
                suppressContentEditableWarning={!props.readOnly}
                contentEditable={!props.readOnly}
              >
                {list.title}
              </Title>
            </FlexStart>
            <Description hide={hide}>
              <div
                color="primary"
                onBlur={onContentChange("description")}
                suppressContentEditableWarning={!props.readOnly}
                contentEditable={!props.readOnly}
              >
                {list.description}
              </div>
            </Description>
          </div>
        </div>
      </div>
    </>
  );
};

export default ToogleListComponent;
