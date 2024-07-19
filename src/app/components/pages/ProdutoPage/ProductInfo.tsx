import { useProductName } from "@/app/contexts/ProductNameContext";

export default function ProductInfo() {
  const { ProductName } = useProductName();

  return (
    <section className="mt-10">
      <h1 className="text-black-0 font-poppins font-semibold uppercase">
        informações tecnicas
      </h1>
      <div className="mt-5 flex flex-col gap-4 small:gap-0 default:flex-row justify-between w-[100%]">
        <div className="flex flex-col w-full">
          <div className="flex flex-col gap-1 w-full max-w-[600px]">
            <h2 className="font-poppins font-medium text-black-300">
              Caracteristicas:
            </h2>
            <div className="max-w-[600px] w-full flex flex-col">
              {ProductName.technicalDetails.map(
                (detail: any, index: number) => (
                  <div
                    key={index}
                    className={`w-full flex ${
                      index === ProductName.technicalDetails.length - 1
                        ? "border-y-2"
                        : "border-t-2"
                    } border-gray-400 `}
                  >
                    <div className="bg-gray-80 3pp:max-w-[250px] w-full  py-3  md:max-h-10 md:h-10 px-2 flex items-center">
                      <span className="font-roboto text-blue-700  text-[14px] md:text-[16px] capitalize">
                        {detail.key}:
                      </span>
                    </div>
                    <div className="bg-gray-50 3pp:max-w-[350px] w-full  py-3  md:max-h-10 md:h-10 px-2 flex items-center">
                      <span className="font-roboto text-blue-700 text-[14px] md:text-[16px] capitalize">
                        {detail.value}
                      </span>
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
          <div className="mt-5 gap-1 flex flex-col">
            <h2 className="font-poppins font-medium text-black-300">
              Especificações
            </h2>
            <div className="max-w-[600px] w-full flex flex-col">
              {ProductName.specifications.map(
                (specification: any, index: number) => (
                  <div
                    key={index}
                    className={`w-full flex ${
                      index === ProductName.specifications.length - 1
                        ? "border-y-2"
                        : "border-t-2"
                    } border-gray-400 `}
                  >
                    <div className="bg-gray-80 3pp:max-w-[250px] w-full py-3  md:max-h-10 md:h-10 px-2 flex items-center">
                      <span className="font-roboto text-blue-700 text-[14px] md:text-[16px]">
                        {" "}
                        {specification.key}:
                      </span>
                    </div>
                    <div className="bg-gray-50 3pp:max-w-[350px] w-full py-3  md:max-h-10 md:h-10 px-2 flex items-center">
                      <span className="font-roboto text-blue-700  text-[14px] md:text-[16px]">
                        {specification.value}
                      </span>
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
        </div>

        <div className="flex flex-col  w-full mt-5 default:mt-0">
          <div className="flex flex-col gap-1 w-full">
            <h2 className="font-poppins font-medium text-black-300 ">
              Conteudo da embalagem:
            </h2>
            <div className="max-w-[600px]  w-full flex flex-col">
              {ProductName.content.map((item: string, index: number) => (
                <div
                  key={index}
                  className={`w-full max-w-[600px] flex ${
                    index === ProductName.content.length - 1
                      ? "border-y-2"
                      : "border-t-2"
                  } border-gray-400 `}
                >
                  <div className="bg-gray-80 3pp:max-w-[250px] w-full py-3  md:max-h-10 md:h-10 px-2 flex items-center">
                    <span className="font-roboto text-blue-700 text-[14px] md:text-[16px]">
                      Conteudo:
                    </span>
                  </div>
                  <div className="bg-gray-50 w-full 3pp:max-w-[350px]  py-3  md:max-h-10 md:h-10 px-2 flex items-center">
                    <span className="font-roboto text-blue-700 text-[14px] md:text-[16px]">
                      {item}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-5 gap-1 flex flex-col">
            <h2 className="font-poppins font-medium text-black-300">
              Garantia:
            </h2>
            <div className="max-w-[600px] w-full flex flex-col">
              <div className="w-full flex border-y-2 border-gray-400 ">
                <div className="bg-gray-80 3pp:max-w-[250px] w-full py-3  md:max-h-10 md:h-10 px-2 flex items-center">
                  <span className="font-roboto text-blue-700  text-[14px] md:text-[16px]">
                    Garantia
                  </span>
                </div>
                <div className="bg-gray-50 3pp:max-w-[350px] w-full py-3  md:max-h-10 md:h-10 px-2 flex items-center">
                  <span className="font-roboto text-blue-700  text-[14px] md:text-[16px]">
                    {ProductName.warranty}:
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-5 gap-1 flex flex-col">
            <h2 className="font-poppins font-medium text-black-300">Peso:</h2>
            <div className="max-w-[600px] w-full flex flex-col">
              <div className="w-full flex border-y-2 border-gray-400 ">
                <div className="bg-gray-80 3pp:max-w-[250px] w-full py-3  md:max-h-10 md:h-10 px-2 flex items-center">
                  <span className="font-roboto text-blue-700 text-[14px] md:text-[16px]">
                    Peso:
                  </span>
                </div>
                <div className="bg-gray-50 3pp:max-w-[350px] w-full py-3  md:max-h-10 md:h-10 px-2 flex items-center">
                  <span className="font-roboto text-blue-700  text-[14px] md:text-[16px]">
                    {ProductName.weight}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
