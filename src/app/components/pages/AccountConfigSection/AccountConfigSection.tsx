import AccountOptionConfig from "./AccountOptionConfig";

export default function AccountConfigSection() {
  return (
    <>
      <section className="flex  flex-1 justify-center mt-10">
        <div className="flex flex-col items-center w-full">
          <div className="flex flex-col justify-center w-full max-w-[600px] p-3">
            <h2 className="font-poppins font-semibold text-[1.3rem] 3pp:text-[1.6rem] md:text-[2rem] text-black-0">
              Gerencia suas informações
            </h2>

            <div className="flex flex-col border border-gray-200 rounded-md mt-5 ">
              <AccountOptionConfig
                optionLabel="Username"
                optionRegister="username"
                optionSubTitleModal="Edite seu usuario"
                optionTitleModal="Edite o seu nome de usuario"
                optionTitle="Nome"
                optionValue="Rafael Achtenberg"
              />

              <div className="bg-gray-200 w-full h-[1px]"></div>

              <AccountOptionConfig
                optionLabel="Email"
                optionRegister="email"
                optionTitle="Email"
                optionSubTitleModal="Edite seu email"
                optionTitleModal="Editar email"
                optionValue="achtenberg.rafa@gmail.com"
              />
              <div className="bg-gray-200 w-full h-[1px]"></div>

              <AccountOptionConfig
                optionLabel="Senha"
                optionRegister="password"
                optionSubTitleModal="Edite sua senha"
                optionTitle="Senha"
                optionTitleModal="Editar senha"
                optionValue="*********"
              />
              <div className="bg-gray-200 w-full h-[1px]"></div>

              <AccountOptionConfig
                optionLabel="Telefone"
                optionRegister="phone"
                optionSubTitleModal="Edite seu numero de celular"
                optionTitle="Numero de celular"
                optionTitleModal="Editar numero de celular"
                optionValue="(51) 99702-2626  "
              />

              <div className="bg-gray-200 w-full h-[1px]"></div>

              <AccountOptionConfig
                optionLabel="CPF"
                optionRegister="cpf"
                optionTitle="CPF"
                optionSubTitleModal="Edite seu CPF"
                optionValue="********"
                optionTitleModal="Editar CPF"
              />

              <div className="bg-gray-200 w-full h-[1px]"></div>
              <button className="border border-black-0  transition-colors font-poppins font-medium flex justify-center items-center   rounded-[5px] p-2 mt-4 text-black-300 my-3 mx-2">
                Encerar sessão
              </button>
            </div>
          </div>
        </div>
      </section>

      <div className="flex justify-center w-full">
        <div className="bg-gray-400 w-[90%] h-[1px] my-20"></div>
      </div>
    </>
  );
}
