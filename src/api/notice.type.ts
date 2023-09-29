import { NoticeRequestSchema, NoticeResponseSchema } from "@/app/schema/notice";

export type CreateNoticeApiBody = NoticeRequestSchema;

export type UpdateNoticeApiBody = Partial<NoticeRequestSchema>;

export type GetNoticeListApiResponse = NoticeResponseSchema[];

export type GetNoticeByIdApiResponse = NoticeResponseSchema;
