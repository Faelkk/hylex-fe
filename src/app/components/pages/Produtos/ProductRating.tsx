import { Product } from "@/app/contexts/CartProductsContext";
import Image from "next/image";

export default function ProductRating({
  product,
  isVisible,
}: {
  product: Product;
  isVisible?: boolean;
}) {
  const fullStars = Math.floor(product.ratingRate);
  const hasHalfStar = product.ratingRate % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  const stars = [];

  for (let i = 0; i < fullStars; i++) {
    stars.push(
      <Image
        key={`full-${i}`}
        src="/icons/star.svg"
        alt="Icon avaliação"
        width={40}
        height={40}
        className="w-[20px] h-[20px]"
      />
    );
  }

  if (hasHalfStar) {
    stars.push(
      <Image
        key="half"
        src="/icons/starHalf.svg"
        alt="Icon avaliação"
        width={40}
        height={40}
        className="w-[20px] h-[20px]"
      />
    );
  }

  for (let i = 0; i < emptyStars; i++) {
    stars.push(
      <Image
        key={`empty-${i}`}
        src="/icons/starGray.svg"
        alt="Icon avaliação"
        width={40}
        height={40}
        className="w-[20px] h-[20px]"
      />
    );
  }

  return <figure className="flex gap-0.5">{stars}</figure>;
}
