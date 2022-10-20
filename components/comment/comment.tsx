import { CommentRead } from "./commentRead";
import { CommentWrite } from "./commentWrite";

export const Comment = ({ comment = {}, type }) => {
  if (type === "read") return <CommentRead comment={comment} />;

  return <CommentWrite />;
};
