import { api } from "./config";
import {
  CreateNoticeApiBody,
  GetNoticeByIdApiResponse,
  GetNoticeListApiResponse,
  UpdateNoticeApiBody,
} from "./notice.type";

const ENDPOINT = "/notice";

export const noticeApi = {
  getNoticeById: (noticeId: number) => api.get<GetNoticeByIdApiResponse>(`${ENDPOINT}/${noticeId}`),

  getNoticeList: () => api.get<GetNoticeListApiResponse>(`${ENDPOINT}`),

  createNotice: (body: CreateNoticeApiBody) => api.post(`${ENDPOINT}`, body),

  updateNotice: (noticeId: number, body: UpdateNoticeApiBody) =>
    api.put(`${ENDPOINT}/${noticeId}`, body),

  deleteNotice: (noticeId: number) => api.delete(`${ENDPOINT}/${noticeId}`),
};
