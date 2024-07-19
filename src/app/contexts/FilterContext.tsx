import {
  ReactNode,
  createContext,
  useContext,
  useState,
  Dispatch,
  SetStateAction,
  useEffect,
} from "react";
import { Product } from "./CartProductsContext";

interface FilterContext {
  ProductFilterContext: Product[];
  selectedFilters: { [key: string]: Set<string> };
  setSelectedFilters: Dispatch<SetStateAction<{ [key: string]: Set<string> }>>;
  sortProducts: (order: string) => void;
  filteredProducts: Product[];
  setFilteredProducts: Dispatch<SetStateAction<Product[]>>;
  activePage: number;
  setActivePage: Dispatch<SetStateAction<number>>;
  maxPriceFilter: number;
  setMaxPriceFilter: Dispatch<SetStateAction<number>>;
}

export const FilterContext = createContext<FilterContext | null>(null);

export const useFilter = () => {
  const context = useContext(FilterContext);

  if (context === null) {
    throw new Error("Filters context must be used inside a provider");
  }
  return context;
};

export function FilterContextProvider({
  children,
  productsExistsFilter,
}: {
  productsExistsFilter: Product[];
  children: ReactNode;
}) {
  const [selectedFilters, setSelectedFilters] = useState<{
    [key: string]: Set<string>;
  }>({});
  const [ProductFilterContext, setProductFilterContext] =
    useState(productsExistsFilter);
  const [filteredProducts, setFilteredProducts] =
    useState<Product[]>(productsExistsFilter);
  const [activePage, setActivePage] = useState<number>(1);
  const [maxPriceFilter, setMaxPriceFilter] = useState<number>(0); // Estado para o valor máximo selecionado

  const sortProducts = (order: string) => {
    const sortedProducts = [...filteredProducts];
    if (order === "Maior preço") {
      sortedProducts.sort((a, b) => b.price - a.price);
    } else if (order === "Menor preço") {
      sortedProducts.sort((a, b) => a.price - b.price);
    } else if (order === "Melhores avaliações") {
      sortedProducts.sort((a, b) => b.ratingRate - a.ratingRate);
    }
    setProductFilterContext(sortedProducts);
    setFilteredProducts(sortedProducts);
  };

  useEffect(() => {
    const filterProducts = () => {
      let filtered = ProductFilterContext;

      Object.keys(selectedFilters).forEach((filterKey) => {
        const filterValues = selectedFilters[filterKey];
        if (filterValues.size > 0) {
          filtered = filtered.filter((product) =>
            product.categoryFiltersOption.some((option) => {
              if (typeof option.value === "string") {
                return (
                  option.key === filterKey &&
                  filterValues.has(option.value.toLowerCase())
                );
              } else if (Array.isArray(option.value)) {
                return (
                  option.key === filterKey &&
                  option.value.some((val) =>
                    filterValues.has(val.toLowerCase())
                  )
                );
              }
              return false;
            })
          );
        }
      });

      setFilteredProducts(filtered);
    };

    filterProducts();
  }, [selectedFilters, ProductFilterContext]);

  return (
    <FilterContext.Provider
      value={{
        selectedFilters,
        setSelectedFilters,
        ProductFilterContext,
        sortProducts,
        filteredProducts,
        setFilteredProducts,
        activePage,
        setActivePage,
        maxPriceFilter,
        setMaxPriceFilter,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
}
