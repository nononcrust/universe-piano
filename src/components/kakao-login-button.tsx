import Image from "next/image";

interface KakaoLoginButtonProps {
  className?: string;
}

export const KakaoLoginButton = ({ ...props }: KakaoLoginButtonProps) => {
  return (
    <Image src="/images/kakao-login.png" width={183} height={45} alt="kakao-login" {...props} />
  );
};
