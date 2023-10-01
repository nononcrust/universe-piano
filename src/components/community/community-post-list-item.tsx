interface CommunityPostListItemProps {
  title: string;
  author: string;
  createdAt: string;
  commentCount: number;
}

export const CommunityPostListItem = ({
  title,
  author,
  createdAt,
  commentCount,
}: CommunityPostListItemProps) => {
  return (
    <li className="flex p-4">
      <h2>{title}</h2>
      <p>{author}</p>
      <p>{createdAt}</p>
      <p>{commentCount}</p>
    </li>
  );
};
