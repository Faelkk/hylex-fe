export default function HomeAnuncio() {
  return (
    <main className="flex items-center justify-center w-full">
      <figure className="relative w-[95%] h-[25rem] mt-10">
        <div
          className="flex md:justify-end absolute inset-0 bg-center bg-cover"
          style={{ backgroundImage: "url('/assets/home.jpg')" }}
        >
          <div className="flex flex-col justify-center md:justify-between py-8 ml-[1.875rem]  small:mr-[1.875rem]">
            <h2 className="font-poppins font-medium text-[2rem] large:text-[2.25rem] max-w-[20.625rem] text-white">
              A melhor loja de produtos gamers no Brasil
            </h2>
            <div className="h-1 bg-gray-0 mt-5 w-[60%] md:w-[95%]"></div>
            <button className="bg-green-400 hover:bg-green-500 font-poppins font-medium p-2 rounded-[5px] max-w-[9.375rem] w-full mt-10 transitions text-gray-0">
              Explorar ofertas
            </button>
          </div>
        </div>
      </figure>
    </main>
  );
}
