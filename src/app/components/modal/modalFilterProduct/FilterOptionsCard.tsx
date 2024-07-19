import { useCategories } from "@/hooks/useCategories";
import FilterCard from "./FilterCard";
import { useFilter } from "@/app/contexts/FilterContext";
import { useEffect } from "react";

type FilterOption = {
  [key: string]: Set<string>;
};

export default function FilterOptionsCard() {
  const {
    selectedFilters,
    setSelectedFilters,
    ProductFilterContext,
    setFilteredProducts,
  } = useFilter();
  const { categories, isLoading } = useCategories();

  const category = categories.find(
    (cat) => cat.id === ProductFilterContext[0]?.categoryId
  );

  const uniqueFilters: FilterOption = {};

  ProductFilterContext.forEach((produto) => {
    produto.categoryFiltersOption.forEach((filter) => {
      const { key, value } = filter;

      if (!uniqueFilters[key]) {
        uniqueFilters[key] = new Set<string>();
      }
      if (Array.isArray(value)) {
        value.forEach((v) => uniqueFilters[key].add(v));
      } else {
        uniqueFilters[key].add(value as string);
      }
    });
  });

  const handleFilter = (
    filterKey: string,
    filterValue: string,
    checked: boolean
  ) => {
    setSelectedFilters((prevFilters) => {
      const newFilters = { ...prevFilters };
      if (!newFilters[filterKey]) {
        newFilters[filterKey] = new Set<string>();
      }
      const normalizedFilterValue =
        typeof filterValue === "string" ? filterValue.toLowerCase() : "";

      if (checked) {
        newFilters[filterKey].delete(normalizedFilterValue);
        if (newFilters[filterKey].size === 0) {
          delete newFilters[filterKey];
        }
      } else {
        newFilters[filterKey].add(normalizedFilterValue);
      }

      return newFilters;
    });
  };

  return (
    <>
      {category?.filters.map((catego, index) => {
        const filterValues = uniqueFilters[catego.key]
          ? Array.from(uniqueFilters[catego.key])
          : [];

        return (
          <div className="mt-5" key={index}>
            <h2 className="font-poppins text-blue-100 text-[18px] capitalize">
              {catego.key}
            </h2>
            <form className="mt-[10px] gap-2 flex flex-col">
              {filterValues.map((filter, index) => (
                <FilterCard
                  key={index}
                  filterKey={catego.key}
                  filterValue={filter}
                  handleFilter={handleFilter}
                  checked={
                    selectedFilters[catego.key]?.has(filter.toLowerCase()) ||
                    false
                  }
                />
              ))}
            </form>
          </div>
        );
      })}
    </>
  );
}
