"use client";

import { Button } from "@/components/ui/button";
import { useAppDispatch } from "@/hooks/use-app-dispatch";
import { useAppSelector } from "@/hooks/use-app-selector";
import { URL } from "@/lib/constants/url";
import { userActions } from "@/store/user";
import Link from "next/link";

export default function LoginPage() {
  console.log("#", URL.KAKAO_LOGIN);

  const { user } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();

  const onClick = () => {
    dispatch(
      userActions.setUser({
        id: 1,
        nickname: "테스트",
        email: "test@gmail.com",
        profileImage: "test",
      }),
    );
  };

  return (
    <main className="container flex max-w-md flex-col items-center">
      <h1 className="mt-16 text-2xl font-bold text-foreground md:text-3xl">로그인</h1>
      <h2 className="mt-2 font-medium text-muted-foreground" onClick={onClick}>
        미대 입시를 위한 모든 것, 유니버스 피아노입니다.
      </h2>
      <p>{user?.nickname}</p>
      <Link href={URL.KAKAO_LOGIN}>
        <Button className="mt-16">카카오 계정으로 로그인</Button>
      </Link>
    </main>
  );
}
