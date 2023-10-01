import { COOKIE } from "@/lib/constants/cookie";
import { userActions } from "@/store/user";
import cookie from "js-cookie";
import { useAppDispatch } from "./use-app-dispatch";
import { useAppSelector } from "./use-app-selector";

export const useAuth = () => {
  const { user } = useAppSelector((state) => state.user);

  const dispatch = useAppDispatch();

  const logout = () => {
    dispatch(userActions.setUser(null));
    cookie.remove(COOKIE.ACCESS_TOKEN);
  };

  return { user, logout };
};
