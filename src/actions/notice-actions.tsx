import { prisma } from "@/lib/prisma";

export const noticeActions = {
  getNoticeList: async () => {
    const notices = await prisma.notice.findMany();

    const initialData = notices.map((item) => ({
      ...item,
      createdAt: item.createdAt.toISOString(),
      updatedAt: item.updatedAt.toISOString(),
    }));

    return initialData.reverse();
  },
  getNoticeById: async (id: number) => {
    const notice = await prisma.notice.findUnique({
      where: {
        id,
      },
    });

    const initialData = notice && {
      ...notice,
      createdAt: notice.createdAt.toISOString(),
      updatedAt: notice.updatedAt.toISOString(),
    };

    return initialData;
  },
};
