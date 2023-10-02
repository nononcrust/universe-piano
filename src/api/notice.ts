import { api } from "./config";
import {
  CreateNoticeApiBody,
  GetNoticeByIdApiResponse,
  GetNoticeListApiResponse,
  UpdateNoticeApiBody,
} from "./notice.type";

const ENDPOINT = "/notice";

export const noticeApi = {
  getNoticeById: async (noticeId: number) => {
    const response = await api.get<GetNoticeByIdApiResponse>(`${ENDPOINT}/${noticeId}`);
    return response.data;
  },

  getNoticeList: async () => {
    const response = await api.get<GetNoticeListApiResponse>(`${ENDPOINT}`);
    return response.data;
  },

  createNotice: async (body: CreateNoticeApiBody) => {
    const resposne = await api.post(`${ENDPOINT}`, body);
    return resposne.data;
  },

  updateNotice: async (data: { noticeId: number; body: UpdateNoticeApiBody }) => {
    const response = await api.put(`${ENDPOINT}/${data.noticeId}`, data.body);
    return response.data;
  },

  deleteNotice: async (noticeId: number) => {
    const response = await api.delete(`${ENDPOINT}/${noticeId}`);
    return response.data;
  },
};
