export default function SupportAddress() {
  return (
    <>
      <p className="font-roboto text-black-300 mt-5 max-w-[90%] text-[14px] pp:text-[16px]">
        Para alterar ou ver informações sobre sua conta siga os passos abaixo
      </p>
      <div className="flex flex-col mx-2">
        <span className="font-roboto text-black-300 mt-5 max-w-[90%] text-[14px] pp:text-[16px]"></span>
        <span className="font-roboto text-black-300 mt-5 max-w-[90%] text-[14px] pp:text-[16px]">
          1. Entre no link: http://localhost:3000/account/config
        </span>
        <span className="font-roboto text-black-300 mt-5 max-w-[90%] text-[14px] pp:text-[16px]">
          2. Clique na informação desejada para editar ou ver
        </span>
        <span className="font-roboto text-black-300 mt-5 max-w-[90%] text-[14px] pp:text-[16px]">
          3. Clique para salvar alterações ou voltar depois de ver informações
          desejadas
        </span>
      </div>
    </>
  );
}
