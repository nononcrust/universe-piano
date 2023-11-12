import { SignUpForm } from "@/components/signup/signup-form";
import { COOKIE } from "@/constants/cookie";
import { ROUTE } from "@/constants/route";
import { jwt, registerTokenSchema } from "@/lib/jwt";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function SignUpPage() {
  const registerToken = cookies().get(COOKIE.REGISTER_TOKEN);
  console.log(registerToken);

  if (!registerToken) {
    return redirect(ROUTE.HOME);
  }

  const initialData = registerTokenSchema.safeParse(jwt.verify(registerToken.value));

  if (!initialData.success) {
    return redirect(ROUTE.HOME);
  }

  try {
    return <SignUpForm initialData={initialData.data.socialData} />;
  } catch (error) {
    return redirect(ROUTE.LOGIN);
  }
}
