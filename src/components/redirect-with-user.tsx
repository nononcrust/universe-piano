"use client";

import { useAppDispatch } from "@/hooks/use-app-dispatch";
import { ROUTE } from "@/lib/constants/route";
import { User, userActions } from "@/store/user";
import { redirect } from "next/navigation";

interface RedirectWithUserProps {
  user: User;
}

export const RedirectWithUser = ({ user }: RedirectWithUserProps) => {
  const dispatch = useAppDispatch();

  dispatch(userActions.setUser(user));
  redirect(ROUTE.HOME);
};
