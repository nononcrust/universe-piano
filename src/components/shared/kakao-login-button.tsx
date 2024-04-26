import { cn } from "@/lib/utils";
import { KAKAO_LOGIN_URL } from "@/services/kakao";
import Link from "next/link";

interface KakaoLoginButtonProps {
  className?: string;
}

export const KakaoLoginButton = ({ className, ...props }: KakaoLoginButtonProps) => {
  return (
    <Link
      href={KAKAO_LOGIN_URL}
      replace
      className={cn(
        "flex h-12 cursor-pointer items-center justify-center gap-2 rounded-xl border border-white bg-[#FFEB00] px-4 text-sm font-medium text-[#3C2929] transition-colors hover:border-gray-200",
        className,
      )}
      {...props}
    >
      <KakaoLogo />
      카카오 계정으로 로그인
    </Link>
  );
};

const KakaoLogo = () => {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 32 32"
      focusable="false"
      role="presentation"
      className="withIcon_icon__3VTbq SNSButtonList_kakaoIcon__3y4jL"
      aria-hidden="true"
    >
      <path d="M16 4.64c-6.96 0-12.64 4.48-12.64 10.08 0 3.52 2.32 6.64 5.76 8.48l-.96 4.96 5.44-3.6 2.4.16c6.96 0 12.64-4.48 12.64-10.08S22.96 4.56 16 4.64z"></path>
    </svg>
  );
};
