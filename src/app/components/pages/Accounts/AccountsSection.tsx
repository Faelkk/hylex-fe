import Link from "next/link";

export default function AccountsSection() {
  const items = [
    {
      href: "/account/config",
      title: "Seus dados",
      description: "Gerenciar senha, e-mail e número de celular",
    },
    {
      href: "/my-orders",
      title: "Seus pedidos",
      description: "Rastrear, devolver ou comprar produtos novamente",
    },
    {
      href: "/account/addresses",
      title: "Endereços",
      description: "Alterar endereços para pedidos",
    },
    {
      href: "/account/my-payments",
      title: "Seus pagamentos",
      description:
        "Gerenciar ou adicionar formas de pagamento e ver suas transações",
    },
    {
      href: "/support",
      title: "Atendimento ao cliente",
      description:
        "Opções de autoatendimento, artigos de ajuda ou fale conosco diretamente",
    },
    {
      href: "/cart",
      title: "Seu carrinho",
      description: "Confira os itens que estão no seu carrinho",
    },
    {
      href: "/favorites",
      title: "Seus favoritos",
      description: "Ver seus itens marcados como favoritos",
    },
    {
      href: "#",
      title: "Sair",
      description:
        "Desconecta você da sua conta, será necessário fazer login novamente.",
    },
  ];

  return (
    <>
      <section className="flex flex-1 justify-center mt-10">
        <div className="flex p-3  flex-col w-full md:w-auto">
          <h2 className="font-poppins text-[24px] text-blue-50">Sua conta</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 large:grid-cols-3 mt-5 gap-3 w-full md:w-auto">
            {items.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="flex flex-col p-6 border border-gray-200 rounded-md bg-gray-0  w-full lg:w-[340px] h-[120px] "
              >
                <h2 className="font-poppins text-black-100 text-[18px]">
                  {item.title}
                </h2>
                <p className="font-roboto text-black-300 text-[14px] mt-2">
                  {item.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <div className="flex justify-center w-full">
        <div className="bg-gray-400 w-[90%] h-[1px] my-20"></div>
      </div>
    </>
  );
}
