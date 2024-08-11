import { COOKIE } from "@/constants/cookie";
import { ROUTE } from "@/constants/route";
import { jwt, registerTokenSchema } from "@/lib/jwt";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { SignUpForm } from "./_components/signup-form";

export default async function SignUpPage() {
  const registerToken = cookies().get(COOKIE.REGISTER_TOKEN);

  if (!registerToken) {
    return redirect(ROUTE.HOME);
  }

  const verifiedRegisterToken = await jwt.verify(registerToken.value);

  const initialData = registerTokenSchema.safeParse(verifiedRegisterToken?.payload);

  if (!initialData.success) {
    return redirect(ROUTE.HOME);
  }

  try {
    return <SignUpForm initialData={initialData.data.socialData} />;
  } catch (error) {
    return redirect(ROUTE.LOGIN);
  }
}
