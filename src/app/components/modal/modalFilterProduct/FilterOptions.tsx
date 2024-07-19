import FilterOptionsCard from "./FilterOptionsCard";
import FilterPrice from "./FilterPrice";

export default function FilterOptions() {
  return (
    <div className="px-6 flex flex-col mt-10">
      <FilterPrice />
      <FilterOptionsCard />
    </div>
  );
}
