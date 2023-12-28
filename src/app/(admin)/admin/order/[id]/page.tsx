import { AdminPageTitle } from "@/components/admin/admin-page-title";
import { OrderForm } from "@/components/admin/order-form";
import { orderRepository } from "@/features/order";

type Context = {
  params: {
    id: string;
  };
};

export default async function AdminOrderEditPage(context: Context) {
  const id = context.params.id;

  const order = await orderRepository.getOrderById(id);

  if (!order) return null;

  return (
    <main>
      <AdminPageTitle title="주문 편집" />
      <OrderForm order={order} />
    </main>
  );
}
