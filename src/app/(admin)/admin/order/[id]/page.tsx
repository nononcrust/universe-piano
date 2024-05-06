import { AdminPageTitle } from "@/components/admin/admin-page-title";
import { OrderForm } from "@/components/admin/order-form";
import { orderRepository } from "@/services/order";

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
      <AdminPageTitle title="주문 수정" />
      <div className="py-4">
        {order.orderItems.map((orderItem) => (
          <div key={orderItem.id}>
            <div className="text-xl font-semibold">주문 상품: {orderItem.product.name}</div>
          </div>
        ))}
      </div>
      <OrderForm order={order} />
    </main>
  );
}
