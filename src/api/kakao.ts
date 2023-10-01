import axios from "axios";
import { GetKakaoUserInfoApiResponse } from "./kakao.type";

const ENDPOINT = {
  KAKAO_TOKEN_URL: "https://kauth.kakao.com/oauth/token",
  KAKAO_USER_INFO_URL: "https://kapi.kakao.com/v2/user/me",
};

export const kakaoApi = {
  getAccessToken: async (code: string) => {
    const data = {
      grant_type: "authorization_code",
      client_id: process.env.NEXT_PUBLIC_KAKAO_CLIENT_ID,
      client_secret: process.env.KAKAO_CLIENT_SECRET,
      redirect_uri: process.env.NEXT_PUBLIC_KAKAO_REDIRECT_URI,
      code,
    };

    const response = await axios.post(ENDPOINT.KAKAO_TOKEN_URL, data, {
      headers: {
        "Content-type": "application/x-www-form-urlencoded;charset=utf-8",
      },
    });
    return response.data;
  },
  getUserInfo: async (accessToken: string) => {
    const response = await axios.get<GetKakaoUserInfoApiResponse>(ENDPOINT.KAKAO_USER_INFO_URL, {
      params: { secure_resource: true },
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return response.data;
  },
};
