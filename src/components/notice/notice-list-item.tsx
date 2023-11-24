interface NoticeListItemProps {
  title: string;
  createdAt: string;
}

export const NoticeListItem = ({ title, createdAt }: NoticeListItemProps) => {
  return (
    <li className="flex cursor-pointer flex-col py-4">
      <p className="text-lg font-medium">{title}</p>
      <p className="text-sm text-muted-foreground">{createdAt}</p>
    </li>
  );
};
