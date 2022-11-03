import { ActivityContainer } from "./styles";
import { Activity } from "components/activity";

export const Activitys = () => {
  const data = [
    { text: "publicou dhsa duas asudsa" },
    { text: "curtiu uma publicação" },
  ];

  return (
    <>
      <ActivityContainer>
        {data.map((item, i) => (
          <Activity
            key={i}
            activity={item}
            isLoading={false}
            user={{ imgUrl: "", name: "", username: "" }}
          />
        ))}
      </ActivityContainer>
    </>
  );
};
