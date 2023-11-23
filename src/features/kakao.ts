import axios from "axios";
import { z } from "zod";

const KAKAO_CLIENT_ID = process.env.NEXT_PUBLIC_KAKAO_CLIENT_ID;
const KAKAO_CLIENT_SECRET = process.env.KAKAO_CLIENT_SECRET;
const KAKAO_REDIRECT_URI = process.env.NEXT_PUBLIC_KAKAO_REDIRECT_URI;

export const KAKAO_LOGIN_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${KAKAO_CLIENT_ID}&redirect_uri=${KAKAO_REDIRECT_URI}&response_type=code`;

const ENDPOINT = {
  KAKAO_TOKEN_URL: "https://kauth.kakao.com/oauth/token",
  KAKAO_USER_INFO_URL: "https://kapi.kakao.com/v2/user/me",
};

export const kakaoApi = {
  getAccessToken: async (code: string) => {
    const data = {
      grant_type: "authorization_code",
      client_id: KAKAO_CLIENT_ID,
      client_secret: KAKAO_CLIENT_SECRET,
      redirect_uri: KAKAO_REDIRECT_URI,
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
    const response = await axios.get(ENDPOINT.KAKAO_USER_INFO_URL, {
      params: { secure_resource: true },
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    return kakaoUserInfoSchema.parse(response.data);
  },
};

export const kakaoUserInfoSchema = z.object({
  id: z.number(),
  connected_at: z.string(),
  properties: z.object({
    nickname: z.string(),
    profile_image: z.string(),
    thumbnail_image: z.string(),
  }),
  kakao_account: z.object({
    profile_nickname_needs_agreement: z.boolean(),
    profile_image_needs_agreement: z.boolean(),
    profile: z.object({
      nickname: z.string(),
      thumbnail_image_url: z.string(),
      profile_image_url: z.string(),
      is_default_image: z.boolean(),
    }),
    has_email: z.boolean(),
    email_needs_agreement: z.boolean(),
    is_email_valid: z.boolean(),
    is_email_verified: z.boolean(),
    email: z.string(),
  }),
});

export type KakaoUserInfo = z.infer<typeof kakaoUserInfoSchema>;
