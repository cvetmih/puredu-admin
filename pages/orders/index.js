import Layout from "../../components/layout/Layout";
import { normalizeOrders } from "../../helpers/normalize-orders";
import Link from "next/link";

const cellClasses = "border border-gray-300 text-sm text-left p-2";

export default function Orders({ orders }) {
  orders = [...orders, ...orders, ...orders, ...orders];

  return (
    <Layout>
      <header className="mb-4 pb-2 border-b">
        <h1 className="font-bold text-3xl">Orders</h1>
      </header>

      <table className="border w-full table-auto">
        <tr>
          <th className={cellClasses}>Date</th>
          <th className={cellClasses}>Order</th>
          <th className={cellClasses}>Amount</th>
          <th className={cellClasses}>Status</th>
          <th className={cellClasses}>Type</th>
          <th className={cellClasses}>Name</th>
          <th className={cellClasses}>E-mail</th>
        </tr>
        {orders.map((order, key) => {
          return (
            <tr
              key={`Orders Row: ${key}`}
              className={key % 2 === 0 ? "bg-gray-100" : "bg-white"}
            >
              <td className={cellClasses}>{order.date}</td>
              <td className={cellClasses}>
                <Link href={`/orders/${order.id}`}>
                  <a className="text-blue-500 underline hover:no-underline">
                    {order.id}
                  </a>
                </Link>
              </td>
              <td className={cellClasses}>{order.amount}</td>
              <td className={cellClasses}>{order.status}</td>
              <td className={cellClasses}>{order.type}</td>
              <td className={cellClasses}>{order.user.name}</td>
              <td className={cellClasses}>{order.user.email}</td>
            </tr>
          );
        })}
      </table>
    </Layout>
  );
}

export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE}/orders`);
  const orders = await res.json();

  return {
    props: {
      orders: normalizeOrders(orders),
    },
  };
}
