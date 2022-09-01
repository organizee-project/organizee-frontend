import { useState } from "react";
import { BsChevronRight, BsChevronDown } from "react-icons/bs";
import { FlexStart, Title, Description } from "./styles";

const DEFAULT_INITIAL_DATA = () => {
  return {
    events: [
      {
        title: "Title",
        description: "Description",
      },
    ],
  };
};

const EventTimeline = (props) => {
  const [hide, setHide] = useState(false);
  const [timelineData, setTimelineData] = useState(
    props.data.events.length > 0 ? props.data : DEFAULT_INITIAL_DATA
  );

  const updateTimelineData = (newData) => {
    setTimelineData(newData);
    if (props.onDataChange) {
      // Inform editorjs about data change
      props.onDataChange(newData);
    }
  };

  const onContentChange = (index, fieldName) => {
    return (e) => {
      const newData = {
        ...timelineData,
      };
      newData.events[index][fieldName] = e.currentTarget.textContent;
      updateTimelineData(newData);
    };
  };

  return (
    <>
      <div>
        <div>
          {timelineData.events.map((event, index) => (
            <div key={index}>
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
                  onBlur={onContentChange(index, "title")}
                  suppressContentEditableWarning={!props.readOnly}
                  contentEditable={!props.readOnly}
                >
                  {event.title}
                </Title>
              </FlexStart>
              <Description hide={hide}>
                <div
                  color="primary"
                  onBlur={onContentChange(index, "description")}
                  suppressContentEditableWarning={!props.readOnly}
                  contentEditable={!props.readOnly}
                >
                  {event.description}
                </div>
              </Description>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default EventTimeline;
