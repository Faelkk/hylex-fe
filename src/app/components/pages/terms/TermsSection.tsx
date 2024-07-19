"use client";

import HeaderTerms from "./HeaderTerms";
import TermsList from "./TermsList";
import DropdownSection from "./DropdownSection";
import TrocasDevolucoes from "./TrocasDevoluções";
import CanaisAtendimento from "./CanaisAtendimentos";
import { useTerms } from "./useTerms";

export default function TermsSection() {
  const { openDropdown, handleToggleDropdown } = useTerms();

  return (
    <main className="flex justify-center mt-10">
      <section className="w-[90%] flex flex-col">
        <HeaderTerms />
        <div className="bg-gray-200 h-[2px] my-10 w-[95%]"></div>
        <section className="flex gap-10">
          <TermsList />
          <article className="flex flex-col gap-5 w-full">
            <DropdownSection
              id="section1"
              title="1. Aceitação dos termos"
              content="Ao acessar ou utilizar nosso website, você concorda em cumprir estes Termos e Condições e todas as leis e regulamentos aplicáveis. Se você não concorda com algum destes termos, não está autorizado a usar ou acessar este site. Os materiais contidos neste site são protegidos pelas leis de direitos autorais e marcas comerciais aplicáveis."
              section="section1"
              openDropdown={openDropdown}
              handleToggleDropdown={handleToggleDropdown}
            />
            <DropdownSection
              title="2. Formas de pagamento"
              content="Aceitamos pagamentos parcelados em todos os cartões de crédito. Para pagamentos à vista também aceitamos PIX e Boleto."
              section="section2"
              id="section2"
              openDropdown={openDropdown}
              handleToggleDropdown={handleToggleDropdown}
            />
            <DropdownSection
              title="3. Trocas e devoluções"
              content={<TrocasDevolucoes />}
              section="section3"
              id="section3"
              openDropdown={openDropdown}
              handleToggleDropdown={handleToggleDropdown}
            />
            <DropdownSection
              title="4. Informações do Usuário"
              content="Ao utilizar nosso site, você concorda em fornecer informações precisas, atualizadas e completas sobre você, conforme solicitado. Você é responsável por manter a confidencialidade de sua conta e senha e por restringir o acesso ao seu computador."
              section="section4"
              id="section4"
              openDropdown={openDropdown}
              handleToggleDropdown={handleToggleDropdown}
            />
            <DropdownSection
              title="5. Propriedade Intelectual"
              content="Todo o conteúdo incluído ou disponibilizado através deste site, como texto, gráficos, logotipos, ícones, imagens, clipes de áudio e vídeo, downloads digitais, e outros, é propriedade do Hylex ou de seus fornecedores e é protegido pelas leis de direitos autorais e outras leis de propriedade intelectual."
              section="section5"
              id="section5"
              openDropdown={openDropdown}
              handleToggleDropdown={handleToggleDropdown}
            />
            <DropdownSection
              title="6. Canais de atendimento"
              content={<CanaisAtendimento />}
              section="section6"
              id="section6"
              openDropdown={openDropdown}
              handleToggleDropdown={handleToggleDropdown}
            />
          </article>
        </section>
        <div className="bg-gray-200 h-[2px] my-20 w-[100%]"></div>
      </section>
    </main>
  );
}
