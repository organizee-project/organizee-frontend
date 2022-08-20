import PostTemplate from "layouts/post";
import { ReactElement } from "react";
import { HeaderLayout } from "components/layouts";

const Post = () => {
  return <PostTemplate />;
};

Post.getLayout = function getLayout(page: ReactElement) {
  return <HeaderLayout>{page}</HeaderLayout>;
};

export default Post;
