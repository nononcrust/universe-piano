import { NoticeList } from "@/components/notice/notice-list";
import { noticeQuery } from "@/features/notice";

export default async function NoticePage() {
  const initialData = await noticeQuery.getNoticeList();

  return <NoticeList initialData={initialData} />;
}
