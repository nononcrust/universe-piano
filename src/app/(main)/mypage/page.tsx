import { ROUTE } from "@/constants/route";
import { redirect } from "next/navigation";

export default function MyPage() {
  return redirect(ROUTE.MYPAGE.PROFILE);
}
