import { useRemarkSync } from "react-remark";

interface MarkdownProps extends React.HTMLAttributes<HTMLDivElement> {
  content: string;
}

export const Markdown = ({ content, ...props }: MarkdownProps) => {
  const reactContent = useRemarkSync(content);

  return <div {...props}>{reactContent}</div>;
};
