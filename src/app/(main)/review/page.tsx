import { ROUTE } from "@/constants/route";
import { redirect } from "next/navigation";

export default function ReviewPage() {
  return redirect(ROUTE.REVIEW.CONSULT.LIST);
}
