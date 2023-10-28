import { NoticeList } from "@/components/notice/notice-list";
import { NoticeListFetcher } from "@/features/notice";

export default async function NoticePage() {
  return (
    <NoticeListFetcher>
      <NoticeList />
    </NoticeListFetcher>
  );
}
