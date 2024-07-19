export default function SupportGaranty() {
  return (
    <>
      <p className="font-roboto text-black-300 mt-5 max-w-[90%] text-[14px] pp:text-[16px]">
        Preciso acionar a garantia de um produto. Como proceder?
      </p>
      <div className="flex flex-col mx-2">
        <span className="font-roboto text-black-300 mt-5 max-w-[90%] text-[14px] pp:text-[16px]"></span>
        <span className="font-roboto text-black-300 mt-5 max-w-[90%] text-[14px] pp:text-[16px]">
          1. Faça o login em nosso site, usando seu e-mail e senha;
        </span>
        <span className="font-roboto text-black-300 mt-5 max-w-[90%] text-[14px] pp:text-[16px]">
          2. Entre no link: http://localhost:3000/my-orders; (Caso não consiga
          acessar o link, é só entrar em &apos;Minha Conta &apos; e selecionar
          &apos;Meus Pedidos &apos; no lado esquerdo da tela).
        </span>
        <span className="font-roboto text-black-300 mt-5 max-w-[90%] text-[14px] pp:text-[16px]">
          3. Depois, você irá localizar o pedido referente ao item que deseja
          acionar a garantia. 4. Clique no botão &apos;Ver detalhes do
          pedido&apos; e, depois, na opção &apos;Solicitar assistência
          técnica&apos;. Pronto, depois de finalizar esses passos, você receberá
          uma mensagem em seu e-mail informando sobre a solicitação. Além disso,
          em até 48 horas úteis, um de nossos atendentes irá te responder com um
          código de postagem e instruções sobre como enviar o produto para nossa
          assistência técnica. No e-mail, também conterá uma lista com os
          endereços e contatos de nossas assistências autorizadas.
        </span>
      </div>
    </>
  );
}
