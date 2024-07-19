import MyPaymentsSection from "@/app/components/pages/MyPayments/MyPaymentsSection";
import { CreditCardsContextProvider } from "@/app/contexts/CreditCardsContext";

export default function MyPaymentsPage() {
  return (
    <CreditCardsContextProvider>
      <MyPaymentsSection />
    </CreditCardsContextProvider>
  );
}
