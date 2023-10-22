import { atom } from "recoil";

export type User = {
  id: number;
  nickname: string;
  email: string;
  profileImage: string;
};

export const userState = atom<User | null>({
  key: "user",
  default: null,
});
