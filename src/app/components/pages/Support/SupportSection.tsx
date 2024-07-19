"use client";

import { useRef } from "react";
import { useTerms } from "../terms/useTerms";
import TrocasDevolucoes from "../terms/TrocasDevoluções";
import CanaisAtendimento from "../terms/CanaisAtendimentos";
import SupportHeader from "./SupportHeader";
import SupportList from "./SupportList";
import SupportDropdown from "./SupportDropdown";
import TermsSupport from "./TermsSupport";
import SupportAddress from "./SuportAddress";
import SupportExchange from "./SupportExchange";
import SupportGaranty from "./SupportGaranty";
import SupportBuyPix from "./SupportBuyPix";

export default function SupportSection() {
  const { openDropdown, handleToggleDropdown } = useTerms();

  const pedidosRef = useRef(null);
  const garantiaRef = useRef(null);
  const pagamentosRef = useRef(null);
  const trocasRef = useRef(null);
  const contaRef = useRef(null);
  const termosRef = useRef(null);
  const contatoRef = useRef(null);

  const refs = {
    pedidosRef,
    garantiaRef,
    pagamentosRef,
    trocasRef,
    contaRef,
    termosRef,
    contatoRef,
  };

  return (
    <>
      <main className="flex justify-center mt-10">
        <section className="w-[90%] flex flex-col">
          <SupportHeader />
          <div className="bg-gray-200 h-[2px] my-10 w-[95%]"></div>
          <section className="flex gap-10">
            <SupportList refs={refs} />
            <article className="flex flex-col gap-5 w-full">
              <div className="flex flex-col gap-5" ref={pedidosRef}>
                <h2 className="font-poppins text-[24px] text-black-300 font-medium">
                  Pedidos
                </h2>
                <SupportDropdown
                  title="Duvidas sobre o status do meu pedido?"
                  content="Para verificar o status do seu pedido, acesse sua conta e clique no pedido que deseja ter informações. Logo abaixo do item, você visualizará uma barra de status que mostrará em que momento seu pedido está. Essa barra é atualizada conforme o pedido for avançando no processo de aprovação da compra ou entrega, caso ocorra algum problema com o seu pedido, entraremos em contato para notificar e levar a melhor solução. Fique de atento ao seu e-mail, nossa comunicação acontece por este canal."
                  section="doubts"
                  openDropdown={openDropdown}
                  handleToggleDropdown={handleToggleDropdown}
                />
                <SupportDropdown
                  title="Como rastrear meu pedido?"
                  content="Acesse o MINHA CONTA no site, selecione o pedido que deseja acompanhar, observe que terá uma barra que mostrará a evolução da sua entrega e, caso queira, consultar direto com o transportador parceiro, escolhido para a entrega no ato da compra, é só acessar o site do parceiro, incluir o número da nota fiscal e consultar o status do pedido."
                  section="tracker"
                  openDropdown={openDropdown}
                  handleToggleDropdown={handleToggleDropdown}
                />
                <SupportDropdown
                  title="Posso alterar o endereço de entrega com o objeto em transporte?"
                  content="Quando seu pedido já estiver em transporte, infelizmente não será possível alterar o endereço de entrega. No entanto, você poderá nos contatar para verificar a possibilidade de solicitarmos o retorno do pedido, para assim efetuarmos a alteração do endereço."
                  section="adress"
                  openDropdown={openDropdown}
                  handleToggleDropdown={handleToggleDropdown}
                />
              </div>
              <div className="flex flex-col gap-5 mt-10" ref={pagamentosRef}>
                <h2 className="font-poppins text-[24px] text-black-300 font-medium">
                  Pagamento e estornos
                </h2>
                <SupportDropdown
                  title="Fiz a compra com cartão, apareceu aprovado, mas o pedido foi cancelado. Por quê?"
                  content="Para segurança dos nossos clientes o Hylex! possui um serviço de anti-fraude que faz toda a investigação dos dados das compras para garantir que tudo vai ocorrer de acordo com o esperado. Caso o pedido não seja aprovado por data divergente, limite ou outros, a reserva do seu limite será liberada em até 48 horas após o cancelamento oficial.."
                  section="card"
                  openDropdown={openDropdown}
                  handleToggleDropdown={handleToggleDropdown}
                />
                <SupportDropdown
                  title="Qual é o prazo para confirmação de pagamento?"
                  content="Pagamentos efetuados via Boleto Bancário e Cartão de Crédito têm um prazo de 1 a 2 dias úteis para confirmação; já para pagamentos via PIX, o prazo de confirmação é de até 30 minutos. Se esse período for expirado e o pagamento de seu pedido permanecer indicado como pendente, será necessário entrar em contato com o nosso Atendimento."
                  section="confirm"
                  openDropdown={openDropdown}
                  handleToggleDropdown={handleToggleDropdown}
                />
                <SupportDropdown
                  title="Como comprar pelo PIX?"
                  content={<SupportBuyPix />}
                  section="pix"
                  openDropdown={openDropdown}
                  handleToggleDropdown={handleToggleDropdown}
                />
              </div>
              <div className="flex flex-col gap-5 mt-10" ref={garantiaRef}>
                <h2 className="font-poppins text-[24px] text-black-300 font-medium">
                  Garantia e arrependimento
                </h2>
                <SupportDropdown
                  title="Preciso acionar a garantia de um produto, como proseguir?"
                  content={<SupportGaranty />}
                  section="support"
                  openDropdown={openDropdown}
                  handleToggleDropdown={handleToggleDropdown}
                />
              </div>
              <div className="flex flex-col gap-5 mt-10" ref={trocasRef}>
                <h2 className="font-poppins text-[24px] text-black-300 font-medium">
                  Trocas e devoluções
                </h2>
                <SupportDropdown
                  title="Troca de produto"
                  content={<SupportExchange />}
                  section="exchange"
                  openDropdown={openDropdown}
                  handleToggleDropdown={handleToggleDropdown}
                />
              </div>
              <div className="flex flex-col gap-5 mt-10" ref={contaRef}>
                <h2 className="font-poppins text-[24px] text-black-300 font-medium">
                  Gerenciar sua conta
                </h2>
                <SupportDropdown
                  title="Como faço para ver informações ou editar sobre minha conta?"
                  content={<SupportAddress />}
                  section="address-change"
                  openDropdown={openDropdown}
                  handleToggleDropdown={handleToggleDropdown}
                />
              </div>
              <div className="flex flex-col gap-5 mt-10" ref={termosRef}>
                <h2 className="font-poppins text-[24px] text-black-300 font-medium">
                  Nossos termos e condições
                </h2>
                <SupportDropdown
                  title="Quais são os termos e condições do site?"
                  content={<TermsSupport />}
                  section="terms"
                  openDropdown={openDropdown}
                  handleToggleDropdown={handleToggleDropdown}
                />
              </div>
              <div className="flex flex-col gap-5 mt-10" ref={contatoRef}>
                <h2 className="font-poppins text-[24px] text-black-300 font-medium">
                  Contato
                </h2>
                <SupportDropdown
                  title="Como entrar em contato com o suporte?"
                  content={<CanaisAtendimento />}
                  section="contact"
                  openDropdown={openDropdown}
                  handleToggleDropdown={handleToggleDropdown}
                />
              </div>
            </article>
          </section>
        </section>
      </main>
      <div className=" flex justify-center w-full">
        <div className="bg-gray-200 h-[2px] my-20 w-[95%]"></div>
      </div>
    </>
  );
}
