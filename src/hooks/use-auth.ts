import { COOKIE } from "@/constants/cookie";
import { userState } from "@/store/user";
import cookie from "js-cookie";
import { useRecoilState } from "recoil";

export const useAuth = () => {
  const [user, setUser] = useRecoilState(userState);

  const logout = () => {
    setUser(null);
    cookie.remove(COOKIE.ACCESS_TOKEN);
  };

  return { user, logout };
};
