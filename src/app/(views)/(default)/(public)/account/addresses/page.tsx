import AdressConfigSection from "@/app/components/pages/AdressConfigSection/AdressConfigSection";
import { AddressContextProvider } from "@/app/contexts/AdressContext";

export default function AcountAdressConfig() {
  return (
    <AddressContextProvider>
      <AdressConfigSection />
    </AddressContextProvider>
  );
}
