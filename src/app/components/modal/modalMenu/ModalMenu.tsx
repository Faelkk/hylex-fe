import Link from "next/link";
import Close from "../../icons/Close";
import MenuOptions from "./MenuOptions";
import Image from "next/image";
import { cn } from "@/functions/cn";
import InputModalMenu from "./InputModalMenu";
import { useRef, useState } from "react";
import MenuCategory from "./MenuCategory";
import { useOutsideClick } from "@/hooks/useOutsideClick";
import { useUser } from "@/app/contexts/UserContext";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
    },
  },
});

export default function ModalMenu({
  handleToggleModal,
}: {
  handleToggleModal: () => void;
}) {
  const { user } = useUser();
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);

  const handleToggleCategory = () => {
    setIsCategoryOpen(!isCategoryOpen);
  };

  const modalRef = useRef(null);
  useOutsideClick(modalRef, handleToggleModal);

  return (
    <aside className="fixed h-full md:h-screen w-full  top-0 left-0  bg-[#0000]/30 z-50 backdrop-blur-md">
      <section
        className="bg-gray-0  absolute w-full md:w-[28.125rem] left-0 h-full  flex flex-col"
        ref={modalRef}
      >
        <header className="bg-black-50 p-6 flex flex-col gap-4">
          <div className="flex justify-between w-full">
            <button
              className="w-[56px]"
              onClick={(event) => {
                event.stopPropagation();
                handleToggleModal();
              }}
            >
              <Close width="20" height="20" />
            </button>
            <Link href="/">
              <Image
                src="/icons/Logo.svg"
                width={32}
                height={32}
                alt="Logo Hylex"
                className={cn(" w-24 lg:w-24 h-10  ")}
              />
            </Link>
            <div className="flex gap-4 items-center">
              <li>
                <Link
                  href="/favorites"
                  className="flex items-center font-poppins gap-[0.625rem] hover:text-gray-400 transition-colors text-gray-0"
                >
                  <Image
                    width={32}
                    height={32}
                    className="h-5 w-5"
                    src="/icons/likes.svg"
                    alt="Favoritos"
                  />
                </Link>
              </li>

              <li>
                <Link
                  href="/cart"
                  className="flex items-center font-poppins gap-[0.625rem] hover:text-gray-400 transition-colors text-gray-0"
                >
                  <Image
                    width={32}
                    height={32}
                    className="h-5 w-5"
                    src="/icons/cart.svg"
                    alt="Carrinho"
                  />
                </Link>
              </li>
            </div>
          </div>
          <div className="flex items-center justify-between mt-2">
            {user ? (
              <>
                <h2 className="font-poppins text-[20px] text-gray-0 capitalize">
                  Olá, {user.username}
                </h2>
              </>
            ) : (
              <button>
                {" "}
                <h2 className="font-poppins text-[20px] text-gray-0 ">
                  Olá, Faça seu login
                </h2>
              </button>
            )}
          </div>
          <InputModalMenu />
        </header>

        <section className="flex-1 flex  bg-[#F2F3F4]">
          {" "}
          {isCategoryOpen ? (
            <QueryClientProvider client={queryClient}>
              <MenuCategory
                handleToggleCategory={handleToggleCategory}
                handleToggleModal={handleToggleModal}
              />
            </QueryClientProvider>
          ) : (
            <MenuOptions
              handleToggleCategory={handleToggleCategory}
              handleToggleModal={handleToggleModal}
            />
          )}
        </section>
      </section>
    </aside>
  );
}
