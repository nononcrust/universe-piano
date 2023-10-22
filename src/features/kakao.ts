import axios from "axios";

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
    const response = await axios.get<KakaoUserInfo>(ENDPOINT.KAKAO_USER_INFO_URL, {
      params: { secure_resource: true },
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return response.data;
  },
};

export type KakaoUserInfo = {
  id: number;
  connected_at: string;
  properties: {
    nickname: string;
    profile_image: string;
    thumbnail_image: string;
  };
  kakao_account: {
    profile_nickname_needs_agreement: boolean;
    profile_image_needs_agreement: boolean;
    profile: {
      nickname: string;
      thumbnail_image_url: string;
      profile_image_url: string;
      is_default_image: boolean;
    };
  };
};
