"use client";

import Link from "next/link";
import InputHeader from "./InputHeader";
import Image from "next/image";
import { cn } from "@/functions/cn";
import { useModal } from "@/hooks/useModal";
import ModalMenu from "../modal/modalMenu/ModalMenu";
import { useUser } from "@/app/contexts/UserContext";

export default function Header() {
  const { handleToggleModal, isModalOpen } = useModal();
  const { user } = useUser();

  return (
    <>
      <header className="bg-black-50 flex justify-center w-full p-4">
        <div className="w-[95%] hidden small:flex items-center justify-between">
          <Link href="/" className="">
            <Image
              src="/icons/Logo.svg"
              width={32}
              height={32}
              alt="Logo Hylex"
              className={cn("w-16 lg:w-24 h-12")}
            />
          </Link>
          <InputHeader />
          <nav>
            <ul className="flex gap-[1.3rem] small:gap-[1.875rem]">
              {user ? (
                <li className="relative">
                  <button
                    className="flex items-center font-poppins gap-[0.625rem] hover:text-gray-400 transition-colors text-gray-0"
                    onClick={handleToggleModal}
                  >
                    <Image
                      width={32}
                      height={32}
                      className="h-5 w-5"
                      src="/icons/user.svg"
                      alt="Perfil"
                    />
                    <span className="hidden default:block capitalize">
                      Olá, {user.username}
                    </span>
                  </button>
                </li>
              ) : (
                <li>
                  <Link
                    href="/signin"
                    className="flex items-center font-poppins gap-[0.625rem] hover:text-gray-400 transition-colors text-gray-0"
                  >
                    <Image
                      width={32}
                      height={32}
                      className="h-5 w-5"
                      src="/icons/user.svg"
                      alt="Entrar"
                    />
                    <span className="hidden default:block">Entrar</span>
                  </Link>
                </li>
              )}
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
                  <span className="hidden default:block"> Favoritos</span>
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
                  <span className="hidden default:block"> Carrinho</span>
                </Link>
              </li>
              <li>
                <div
                  onClick={handleToggleModal}
                  className="cursor-pointer flex items-center font-poppins gap-[0.625rem] hover:text-gray-400 transition-colors text-gray-0"
                >
                  <Image
                    width={32}
                    height={32}
                    className="h-6 w-6"
                    src="/icons/menu.svg"
                    alt="Menu"
                  />
                  <span className="hidden default:block">Menu</span>
                </div>
              </li>
            </ul>
          </nav>
        </div>

        <div className="flex flex-col small:hidden w-[95%] gap-4">
          <div className="flex flex-col 3pp:flex-row items-center justify-between">
            <Link href="/">
              <Image
                src="/icons/Logo.svg"
                width={32}
                height={32}
                alt="Logo Hylex"
                className={cn("w-24 lg:w-24 h-12")}
              />
            </Link>
            <nav>
              <ul className="flex gap-[1.3rem] small:gap-[1.875rem]">
                {user ? (
                  <li className="relative">
                    <button
                      className="flex items-center font-poppins gap-[0.625rem] hover:text-gray-400 transition-colors text-gray-0"
                      onClick={handleToggleModal}
                    >
                      <Image
                        width={32}
                        height={32}
                        className="h-5 w-5"
                        src="/icons/user.svg"
                        alt="Perfil"
                      />
                      <span className="hidden large:block capitalize">
                        Olá, {user.username}
                      </span>
                    </button>
                  </li>
                ) : (
                  <li>
                    <Link
                      href="/signin"
                      className="flex items-center font-poppins gap-[0.625rem] hover:text-gray-400 transition-colors text-gray-0"
                    >
                      <Image
                        width={32}
                        height={32}
                        className="h-5 w-5"
                        src="/icons/user.svg"
                        alt="Entrar"
                      />
                      <span className="hidden large:block">Entrar</span>
                    </Link>
                  </li>
                )}
                <li>
                  <Link
                    href="/favorites"
                    className="flex items-center font-poppins gap-[0.625rem] hover:text-gray-400 transition-colors"
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
                    className="flex items-center font-poppins gap-[0.625rem] hover:text-gray-400 transition-colors"
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
                <li>
                  <div
                    onClick={handleToggleModal}
                    className="cursor-pointer flex items-center font-poppins gap-[0.625rem] hover:text-gray-400 transition-colors"
                  >
                    <Image
                      width={32}
                      height={32}
                      className="h-6 w-6"
                      src="/icons/menu.svg"
                      alt="Menu"
                    />
                  </div>
                </li>
              </ul>
            </nav>
          </div>
          <InputHeader />
        </div>
      </header>

      {isModalOpen && <ModalMenu handleToggleModal={handleToggleModal} />}
    </>
  );
}
