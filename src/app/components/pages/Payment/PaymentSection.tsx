import { AddressContextProvider } from "@/app/contexts/AdressContext";
import PaymentMethod from "./methods/PaymentMethod";
import PaymentOverview from "./PaymentOverview";
import PaymentReview from "./PaymentReview";
import PaymentSedex from "./PaymentSedex";
import { CreditCardsContextProvider } from "@/app/contexts/CreditCardsContext";
import { PaymentMethodContextProvider } from "@/app/contexts/PaymentMethod";
import { OrderContextProvider } from "@/app/contexts/OrderContext";

export default function PaymentSection() {
  return (
    <AddressContextProvider>
      <CreditCardsContextProvider>
        <PaymentMethodContextProvider>
          <OrderContextProvider>
            <main className="mt-10 mb-20 flex justify-center">
              <section className="w-[95%] flex flex-col-reverse md:flex-row gap-10 md:gap-20">
                <div className="flex-1 md:max-w-[70%]">
                  <PaymentSedex />
                  <div className="bg-gray-200  w-full max-w-[800px] h-[2px] my-10"></div>
                  <PaymentMethod />
                  <div className="bg-gray-200  w-full max-w-[800px] h-[2px] my-10"></div>
                  <PaymentReview />
                </div>
                <PaymentOverview />
              </section>
            </main>
          </OrderContextProvider>
        </PaymentMethodContextProvider>
      </CreditCardsContextProvider>
    </AddressContextProvider>
  );
}
