import { NotFoundFallback } from "@/components/layouts/not-found-fallback";
import { NoticeDetail } from "@/components/notice/notice-detail";
import { prisma } from "@/lib/prisma";

const getNoticeDetail = async (noticeId: number) => {
  const data = await prisma.notice.findUnique({
    where: {
      id: noticeId,
    },
  });

  if (!data) {
    return null;
  }

  const noticeDetail = {
    ...data,
    createdAt: data.createdAt.toISOString(),
    updatedAt: data.updatedAt.toISOString(),
  };

  return noticeDetail;
};

export default async function NoticeDetailPage({ params }: { params: { noticeId: string } }) {
  const initialData = await getNoticeDetail(Number(params.noticeId));

  if (!initialData) {
    return <NotFoundFallback />;
  }

  return <NoticeDetail initialData={initialData} />;
}
