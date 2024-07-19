export interface Products {
  id: number;
  name: string;
  price: number;
  ratingRate: number;
  ratingQuantity: number;
  imagesByColor: ProductImageByColor[];
  images: ProductImage[];
  description: string;
  technicalDetails: TechnicalDetail[];
  specifications: Specification[];
  content: string[];
  warranty: string;
  weight: string;
  categoryId: number;
  categoryFiltersOption: CategoryFiltersOption[];
}

interface ProductImageByColor {
  id: number;
  color: string;
  url: string;
  productId: number;
}

interface ProductImage {
  id: number;
  color: string;
  urls: string[];
  productId: number;
}

export interface TechnicalDetail {
  id: number;
  key: string;
  value: string;
  productId: number;
}

export interface Specification {
  id: number;
  key: string;
  value: string;
  productId: number;
}

export interface CategoryFiltersOption {
  id: number;
  key: string;
  value: string;
  productId: number;
}
