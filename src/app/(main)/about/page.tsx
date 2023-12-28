import { ROUTE } from "@/constants/route";
import { redirect } from "next/navigation";

export default function AboutPage() {
  return redirect(ROUTE.ABOUT.COMPANY);
}
