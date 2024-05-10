import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="flex w-[90%]">
      <Link href="/">
        <Image
          src="/icons/Hylex.svg"
          width={32}
          height={32}
          alt="Logo Hylex"
          className="w-16 h-12"
        />
      </Link>
    </header>
  );
}
