import { kakaoApi } from "@/api/kakao";
import { SignUpForm } from "@/components/signup/signup-form";
import { ROUTE } from "@/lib/constants/route";
import { redirect } from "next/navigation";

const getKakaoUserInfo = async (token: string) => {
  const data = await kakaoApi.getUserInfo(token);

  return data;
};

export default async function SignUpPage({ searchParams }: { searchParams?: { token: string } }) {
  const token = searchParams?.token;
  console.log("@token", token);

  if (!token) {
    return redirect(ROUTE.HOME);
  }

  try {
    const initialData = await getKakaoUserInfo(token);
    console.log("@initialData", initialData);
    return <SignUpForm initialData={initialData} />;
  } catch (error) {
    console.log("kakao token error");
    return redirect(ROUTE.LOGIN);
  }
}
