export default function SupportHeader() {
  return (
    <header>
      <div className="flex flex-col gap-1">
        <span className="font-poppins text-[20px] uppercase text-blue-700">
          Serviço de atendimento
        </span>
        <h1 className="font-poppins text-[32px] text-black-0">
          Serviço de suporte e atendimento ao cliente Hylex.
        </h1>
        <p className="font-roboto text-black-0 max-w-[800px] mt-2">
          Tire todas as suas dúvidas sobre o Hylex aqui, confira nossas
          perguntas frequentes sobre cadastro, compra, garantia e outros
          assuntos, e se não encontrar o que estava procurando, você também pode
          entrar em contato com o nosso suporte por chat ou telefone.
        </p>
      </div>
    </header>
  );
}
