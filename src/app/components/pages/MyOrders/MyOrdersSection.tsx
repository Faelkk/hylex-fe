import { MyOrdersContextProvider } from "@/app/contexts/MyOrdersContext";
import MyOrdersContent from "./MyOrdersContent";
import MyOrdersEmpty from "./MyOrdersEmpty";

export default function MyOrdersSection() {
  const myOrders = [];
  return (
    <MyOrdersContextProvider myOrders={myOrders}>
      {myOrders.length > 0 ? <MyOrdersContent /> : <MyOrdersEmpty />}
    </MyOrdersContextProvider>
  );
}
