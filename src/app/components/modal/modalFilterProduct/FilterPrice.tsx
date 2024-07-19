import React, { ChangeEvent, useState, useEffect } from "react";
import "./FilterPrice.css";
import { useFilter } from "@/app/contexts/FilterContext";

export default function FilterPrice() {
  const {
    ProductFilterContext,
    filteredProducts,
    setFilteredProducts,
    maxPriceFilter,
    setMaxPriceFilter,
  } = useFilter();
  const [minValue, setMinValue] = useState(0);
  const [maxValue, setMaxValue] = useState(0);
  const [currentMax, setCurrentMax] = useState(0);

  useEffect(() => {
    const maxProductPrice = ProductFilterContext.reduce((max, product) => {
      return product.price > max ? product.price : max;
    }, 0);

    if (maxPriceFilter !== 0) {
      setMaxValue(Math.ceil(maxPriceFilter));
    } else {
      setMaxValue(Math.ceil(maxProductPrice));
    }
    setCurrentMax(Math.ceil(maxProductPrice));
  }, [ProductFilterContext, maxPriceFilter]);

  const handleMaxChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = Math.max(Number(event.target.value), minValue);
    setMaxValue(Math.ceil(value));
    setMaxPriceFilter(Math.ceil(value));
    filterProducts(minValue, Math.ceil(value));
  };

  const handleMinChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = Math.min(Number(event.target.value), maxValue);
    setMinValue(Math.ceil(value));
    filterProducts(Math.ceil(value), maxValue);
  };

  const filterProducts = (min: number, max: number) => {
    const filtered = ProductFilterContext.filter(
      (product) => product.price >= min && product.price <= max
    );
    setFilteredProducts(filtered);
  };

  return (
    <div className="max-w-[300px]">
      <h2 className="font-poppins text-blue-100 text-[18px]">Preço</h2>
      <span className="font-roboto text-gray-600">Intervalo de preço</span>
      <form className="mt-[10px] flex flex-col">
        <div className="relative w-full">
          <input
            type="range"
            min={0}
            max={currentMax}
            value={minValue}
            onChange={handleMinChange}
            className="slider slider-min"
          />
          <input
            type="range"
            min={0}
            max={currentMax}
            value={maxValue}
            onChange={handleMaxChange}
            className="slider slider-max"
          />
          <div className="relative h-1 bg-black-700">
            <div
              className="absolute h-1 bg-green-400"
              style={{
                left: `${(minValue / currentMax) * 100}%`,
                right: `${100 - (maxValue / currentMax) * 100}%`,
              }}
            ></div>
          </div>
        </div>
        <div className="flex justify-between mt-[10px]">
          <span className="font-roboto text-black-600">
            R$ {Math.ceil(minValue)} {/* Arredonda para cima */}
          </span>
          <span className="font-roboto text-black-600">
            R$ {Math.ceil(maxValue)} {/* Arredonda para cima */}
          </span>
        </div>
      </form>
    </div>
  );
}
