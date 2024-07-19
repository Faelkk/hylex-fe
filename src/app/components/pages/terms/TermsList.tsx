import Link from "next/link";

export default function TermsList() {
  return (
    <aside className="hidden md:flex md:flex-col bg-gray-50 max-w-[400px] max-h-[380px] w-full rounded-[5px] drop-shadow-md">
      <header className="bg-gray-300 px-5 p-5">
        <h2 className="font-poppins text-black-0">
          Navegue entre as políticas do site
        </h2>
      </header>
      <ul className="px-5 py-5 flex flex-col gap-[10px]">
        <Link className="text-black-300 font-roboto" href="#section1">
          {" "}
          1. Aceitação dos Termos
        </Link>
        <Link className="text-black-300 font-roboto" href="#section2">
          2. Formas de pagamento
        </Link>
        <Link className="text-black-300 font-roboto" href="#section3">
          <span>3. Trocas e devoluções</span>
          <div className="flex flex-col gap-1 mx-2">
            <span>3.1 Devoluções</span>
            <span>3.2 Trocas</span>
            <span>3.3 Devoluções e Trocas por Defeito</span>
          </div>
        </Link>
        <Link className="text-black-300 font-roboto" href="#section4">
          4. Informações do Usuário
        </Link>
        <Link className="text-black-300 font-roboto" href="#section6">
          5. Propriedade Intelectual
        </Link>
        <Link className="text-black-300 font-roboto" href="#section6">
          6. Canais de Atendimento
        </Link>
      </ul>
    </aside>
  );
}
