import Logo from "../../logo/Logo";

export default function Footer() {
  return (
    <footer className="bg-black-50 flex justify-center w-full h-16">
      <div className="w-full pp:w-[90%] flex justify-center">
        <div className="flex items-center justify-center pp:justify-between w-full">
          <Logo />
          <span className="font-poppins text-[12px] 3pp:text-[14px] text-black-700 ">
            2024 © todos os direitos reservados.
          </span>
        </div>
      </div>
    </footer>
  );
}
