import { noticeActions } from "@/actions/notice-actions";
import { NoticeList } from "@/components/notice/notice-list";

export default async function NoticePage() {
  const initialData = await noticeActions.getNoticeList();

  return <NoticeList initialData={initialData} />;
}
