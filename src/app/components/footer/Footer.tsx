import Link from "next/link";
import FooterCategories from "./FooterCategories";
import FooterSection from "./FooterSection";

export default function Footer() {
  return (
    <footer className="bg-black-50 px-5 pt-10 pb-5 flex items-center md:justify-center md:max-h-[250px] ">
      <div className="flex flex-col md:flex-row  items-start justify-start gap-10 md:gap-40">
        <div className="flex flex-col">
          <Link href="/">
            <h2 className="font-poppins text-[18px] uppercase text-gray-0 ">
              Hylex
            </h2>
          </Link>
          <div className="flex flex-col gap-1 justify-end mt-[10px] md:mt-5 ">
            <Link
              href="/about-us"
              className="font-roboto text-black-700 text-[14px]"
            >
              Sobre nós
            </Link>
            <Link
              href="/terms"
              className="font-roboto text-black-700 text-[14px] "
            >
              Termos e Condições
            </Link>
            <span className="font-roboto text-black-700 text-[14px] ">
              2024 © todos os direitos reservados.
            </span>
          </div>
        </div>
        <div className="flex flex-col">
          <h2 className="font-poppins text-[18px] uppercase text-gray-0 ">
            Contato
          </h2>
          <div className="flex flex-col mt-[10px] md:mt-5 gap-1">
            {" "}
            <span className="font-roboto text-black-700 text-[14px]">
              + 55 51 9999-9999
            </span>
            <span className="font-roboto text-black-700 text-[14px] ">
              Contato@gmail.com
            </span>
            <span className="font-roboto text-black-700 text-[14px] ">
              Av Bento Gonçalves , 791 - Porto Alegre
            </span>
            <span className="font-roboto text-black-700 text-[14px] ">
              Porto Alegre - RS
            </span>
          </div>
        </div>
        <div className="flex flex-col">
          <h2 className="font-poppins text-[18px] uppercase text-gray-0 ">
            Categorias
          </h2>
          <div className="flex flex-col mt-[10px] md:mt-5">
            <FooterSection />
          </div>
        </div>
      </div>
    </footer>
  );
}
