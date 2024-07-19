import React, { RefObject } from "react";

interface Refs {
  pedidosRef: RefObject<HTMLElement>;
  garantiaRef: RefObject<HTMLElement>;
  pagamentosRef: RefObject<HTMLElement>;
  trocasRef: RefObject<HTMLElement>;
  contaRef: RefObject<HTMLElement>;
  termosRef: RefObject<HTMLElement>;
  contatoRef: RefObject<HTMLElement>;
}

interface SupportListProps {
  refs: Refs;
}

const SupportList: React.FC<SupportListProps> = ({ refs }) => {
  const handleScroll = (ref: RefObject<HTMLElement>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <aside className="hidden md:flex md:flex-col bg-gray-50 max-w-[400px] max-h-[330px] w-full rounded-md drop-shadow-md">
      <header className="bg-gray-300 px-5 p-5 rounded-md">
        <h2 className="font-poppins text-black-0">Perguntas frequentes</h2>
      </header>
      <ul className="px-5 py-5 flex flex-col gap-[10px]">
        <a
          className="text-black-300 font-roboto cursor-pointer"
          onClick={() => handleScroll(refs.pedidosRef)}
        >
          Pedidos
        </a>
        <a
          className="text-black-300 font-roboto cursor-pointer"
          onClick={() => handleScroll(refs.garantiaRef)}
        >
          Garantia ou Arrependimento
        </a>
        <a
          className="text-black-300 font-roboto cursor-pointer"
          onClick={() => handleScroll(refs.pagamentosRef)}
        >
          Pagamento e estorno
        </a>
        <a
          className="text-black-300 font-roboto cursor-pointer"
          onClick={() => handleScroll(refs.trocasRef)}
        >
          Trocas e devoluções
        </a>
        <a
          className="text-black-300 font-roboto cursor-pointer"
          onClick={() => handleScroll(refs.contaRef)}
        >
          Gerenciar sua conta
        </a>
        <a
          className="text-black-300 font-roboto cursor-pointer"
          onClick={() => handleScroll(refs.termosRef)}
        >
          Nossos termos e condições
        </a>
        <a
          className="text-black-300 font-roboto cursor-pointer"
          onClick={() => handleScroll(refs.contatoRef)}
        >
          Contato
        </a>
      </ul>
    </aside>
  );
};

export default SupportList;
