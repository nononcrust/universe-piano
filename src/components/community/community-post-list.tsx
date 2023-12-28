import { CommunityPostListItem } from "@/components/community/community-post-list-item";
import { formatDate } from "@/lib/utils";

const DUMMY_POST_LIST = Array(10)
  .fill(0)
  .map((_, index) => ({
    title: `게시글 제목 ${index + 1}`,
    author: `노논`,
    createdAt: new Date().toISOString(),
    commentCount: 10,
  }));

export const CommunityPostList = () => {
  return (
    <ul className="flex flex-col">
      {DUMMY_POST_LIST.map((item, index) => (
        <CommunityPostListItem
          title={item.title}
          author={item.author}
          createdAt={formatDate(item.createdAt)}
          commentCount={item.commentCount}
          key={index}
        />
      ))}
    </ul>
  );
};
