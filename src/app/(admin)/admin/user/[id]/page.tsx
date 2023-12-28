import { AdminPageTitle } from "@/components/admin/admin-page-title";
import { UserForm } from "@/components/admin/user-form";
import { userRepository } from "@/features/user";

type Context = {
  params: {
    id: string;
  };
};

export default async function AdminUserEditPage(context: Context) {
  const id = context.params.id;

  const user = await userRepository.getUserById(id);

  if (!user) return null;

  return (
    <main className="container">
      <AdminPageTitle title="유저 관리" />
      <UserForm user={user} />
    </main>
  );
}
