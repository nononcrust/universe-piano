import { ROUTE } from "@/constants/route";
import { redirect } from "next/navigation";

export default function ServicePage() {
  return redirect(ROUTE.SERVICE.CONSULTING);
}
