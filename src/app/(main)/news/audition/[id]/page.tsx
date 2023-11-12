import { Markdown } from "@/components/markdown";
import { CommentInput } from "@/components/notice/comment-input";
import { CommentItem } from "@/components/notice/comment-item";
import { Button } from "@/components/ui/button";
import { ROUTE } from "@/constants/route";
import { formatDate } from "@/lib/utils";
import Link from "next/link";

const DUMMY_DATA = {
  id: 1,
  title: "공지사항 테스트입니다. 안녕하세요",
  content: "## 안녕하세요\n\n### 테스트입니다.\n\n- 1\n- 2\n- 3",
  createdAt: "2021-09-01T00:00:00.000Z",
};

const DUMMY_COMMENTS = Array(10)
  .fill(0)
  .map((_, index) => ({
    id: index,
    content: "댓글입니다.",
    createdAt: "2021-09-01T00:00:00.000Z",
  }));

export default function AuditionNoticeDetailPage() {
  const data = DUMMY_DATA;

  return (
    <main className="container py-16">
      <h1 className="text-2xl font-bold text-foreground md:mt-8 md:text-3xl">공지사항</h1>
      {data && (
        <>
          <div className="mt-12 border-b pb-8">
            <h2 className="text-lg font-semibold md:text-2xl">{data.title}</h2>
            <p className="mt-4 text-sm text-muted-foreground">{formatDate(data.createdAt)}</p>
          </div>
          <Markdown className="prose mt-8" content={data.content} />
        </>
      )}
      <h1 className="mt-24 text-xl font-bold text-foreground md:text-2xl">댓글 13</h1>
      <CommentInput className="mt-8" />
      <ul className="mt-8 flex flex-col gap-8">
        {DUMMY_COMMENTS.map((comment) => (
          <CommentItem key={comment.id} />
        ))}
        <div className="mt-8">
          <Link href={ROUTE.NEWS.NOTICE.LIST}>
            <Button variant="secondary">목록으로</Button>
          </Link>
        </div>
      </ul>
    </main>
  );
}
