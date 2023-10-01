import { NoticeList } from "@/components/notice/notice-list";
import { prisma } from "@/lib/prisma";

const getNoticeList = async () => {
  const notices = await prisma.notice.findMany();

  const initialData = notices.map((item) => ({
    ...item,
    createdAt: item.createdAt.toISOString(),
    updatedAt: item.updatedAt.toISOString(),
  }));

  return initialData.reverse();
};

export default async function NoticePage() {
  const initialData = await getNoticeList();

  return <NoticeList initialData={initialData} />;
}
