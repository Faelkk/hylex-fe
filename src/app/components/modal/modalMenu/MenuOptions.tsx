import { onLogout } from "@/actions/user/logout";
import { useUser } from "@/app/contexts/UserContext";
import { useRouter } from "next/navigation";

export default function MenuOptions({
  handleToggleCategory,
  handleToggleModal,
}: {
  handleToggleCategory: () => void;
  handleToggleModal: () => void;
}) {
  const router = useRouter();
  const { user, setUser } = useUser();

  const handleLinkClick = (url: string) => {
    handleToggleModal();
    router.push(`/${url}`);
  };

  async function handleLogout() {
    await onLogout();
    setUser(null);
  }

  return (
    <section className="flex flex-col p-6 flex-1">
      <ul className="flex flex-col flex-1">
        <button
          onClick={() => handleLinkClick("account")}
          className="font-poppins text-[16px] text-black-300 flex items-center gap-2 py-4 justify-between p-2 bg-gray-0 rounded-sm w-full border border-b-gray-200"
        >
          Minha conta
        </button>
        <button
          onClick={() => handleLinkClick("my-orders")}
          className="font-poppins text-[16px] text-black-300 flex items-center gap-2 py-4 justify-between p-2 bg-gray-0 rounded-sm w-full border border-b-gray-200"
        >
          Meus pedidos
        </button>
        <button
          onClick={handleToggleCategory}
          className="font-poppins text-[16px] text-black-300 flex items-center gap-2 py-4 justify-between p-2 bg-gray-0 rounded-sm w-full border border-b-gray-200"
        >
          Categorias
        </button>
        <button
          onClick={() => handleLinkClick("favorites")}
          className="font-poppins text-[16px] text-black-300 flex items-center gap-2 py-4 justify-between p-2 bg-gray-0 rounded-sm w-full border border-b-gray-200"
        >
          Favoritos
        </button>
        <button
          onClick={() => handleLinkClick("cart")}
          className="font-poppins text-[16px] text-black-300 flex items-center gap-2 py-4 justify-between p-2 bg-gray-0 rounded-sm w-full border border-b-gray-200"
        >
          Carrinho
        </button>

        <button
          onClick={() => handleLinkClick("featured")}
          className="font-poppins text-[16px] text-black-300 flex items-center gap-2 py-4 justify-between p-2 bg-gray-0 rounded-sm w-full border border-b-gray-200"
        >
          Destaques
        </button>

        <button
          onClick={() => handleLinkClick("bestSellers")}
          className="font-poppins text-[16px] text-black-300 flex items-center gap-2 py-4 justify-between p-2 bg-gray-0 rounded-sm w-full border border-b-gray-200"
        >
          Mais vendidos
        </button>

        <button
          onClick={() => handleLinkClick("terms")}
          className="font-poppins text-[16px] text-black-300 flex items-center gap-2 py-4 justify-between p-2 bg-gray-0 rounded-sm w-full border border-b-gray-200"
        >
          Termos e condições
        </button>
        <button
          onClick={() => handleLinkClick("about-us")}
          className="font-poppins text-[16px] text-black-300 flex items-center gap-2 py-4  justify-between p-2 bg-gray-0 rounded-sm w-full border border-b-gray-200"
        >
          Sobre nós
        </button>
      </ul>

      <>
        {user ? (
          <>
            {" "}
            <button
              className="bg-green-400 hover:bg-green-500 transition-colors font-poppins font-medium flex justify-center items-center w-full  rounded-[5px] p-2 mt-4 text-gray-0"
              onClick={handleLogout}
            >
              Sair
            </button>
          </>
        ) : (
          <div>
            {" "}
            <button
              onClick={() => handleLinkClick("signin")}
              className="bg-green-400 hover:bg-green-500 transition-colors font-poppins font-medium flex justify-center items-center w-full  rounded-[5px] p-2 mt-4 text-gray-0"
            >
              Entrar
            </button>
            <button
              onClick={() => handleLinkClick("signup")}
              className="border border-black-0  transition-colors font-poppins font-medium flex justify-center items-center w-full  rounded-[5px] p-2 mt-4 text-black-300"
            >
              Cadastrar
            </button>
          </div>
        )}
      </>
    </section>
  );
}
