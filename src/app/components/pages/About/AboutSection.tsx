import Image from "next/image";

export default function AboutSection() {
  return (
    <main className="flex-1 flex flex-col items-center">
      <header className="w-full flex items-center justify-center bg-gray-500 p-4">
        <h1 className="font-poppins text-[32px] text-blue-100 ">Sobre Nós</h1>
      </header>
      <section className="flex flex-col w-[90%] justify-center mt-5">
        <article>
          <h2 className="font-poppins uppercase text-[24px] text-blue-100">
            QUEM NÓS SOMOS
          </h2>
          <div className="mt-2 flex flex-col gap-[10px]">
            <p className="font-roboto text-black-300">
              Bem-vindo à Hylex, o seu destino definitivo para os melhores
              periféricos gamer do mercado. Somos mais do que uma simples loja
              online - somos apaixonados por jogos e comprometidos em fornecer
              aos nossos clientes uma experiência de compra excepcional, repleta
              de qualidade, variedade e atendimento personalizado.
            </p>
            <p className="font-roboto text-black-300">
              Fundada por gamers para gamers, a Hylex nasceu do desejo de criar
              um espaço onde os players pudessem encontrar os periféricos mais
              avançados e preparados, tudo em um único lugar. Desde então, temos
              trabalhado incansavelmente para reunir uma seleção cuidadosamente
              dos melhores produtos das principais marcas do setor.
            </p>
            <p className="font-roboto text-black-300">
              Nosso compromisso com a qualidade vai além da simples seleção de
              produtos. Cada item em nosso catálogo é cuidadosamente avaliado
              para garantir desempenho superior, durabilidade e design inovador
              - tudo para elevar sua experiência de jogo a novos patamares.
            </p>
          </div>
        </article>
        <section className="mt-10 flex flex-col items-center">
          <h2 className="font-poppins text-black-0  text-[32px]">
            Um dos maiores e-commerce de produtos gamers do mundo
          </h2>
        </section>
        <article className="mt-10 flex flex-col md:flex-row gap-5 md:gap-10">
          <h2 className="font-poppins uppercase text-[18px] text-blue-100 font-medium">
            Missão e Valores
          </h2>
          <div className="flex flex-col gap-5 flex-1">
            <p className="font-roboto text-black-300">
              Nossa missão é ser o destino definitivo para gamers apaixonados em
              busca dos melhores periféricos e acessórios. Buscamos
              incessantemente os produtos mais inovadores e avançados para
              garantir que nossos clientes tenham acesso ao que há de melhor no
              mercado
            </p>
            <p className="font-roboto text-black-300">
              {" "}
              Nosso compromisso com a qualidade e a excelência permeia tudo o
              que fazemos, desde a cuidadosa seleção de produtos até o
              atendimento ao cliente que oferecemos. Valorizamos a transparência
              em todas as nossas interações e nos esforçamos para construir
              relacionamentos sólidos e duradouros com nossos clientes. Na
              Hylex, não somos apenas uma loja online somos uma comunidade que
              compartilha a mesma paixão.
            </p>
          </div>
        </article>
      </section>
    </main>
  );
}
