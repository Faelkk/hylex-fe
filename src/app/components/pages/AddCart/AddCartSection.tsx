import FavoriteRecommend from "../Favorites/FavoriteRecommend";
import AddCart from "./AddCart";

export default function AddCartSection() {
  return (
    <section className="flex-1  flex justify-center w-full mt-10">
      <div className="flex flex-col max-w-[95%] w-full">
        <AddCart />
        <div className="bg-gray-200 h-[2px] my-10 w-[100%]"></div>
        <FavoriteRecommend />
      </div>
    </section>
  );
}
