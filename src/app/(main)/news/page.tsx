import { ROUTE } from "@/constants/route";
import { redirect } from "next/navigation";

export default function NewsListPage() {
  return redirect(ROUTE.NEWS.NOTICE.LIST);
}
