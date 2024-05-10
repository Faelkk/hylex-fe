import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/">
      <Image
        src="/icons/Logo.svg"
        width={32}
        height={32}
        alt="Logo Hylex"
        className="w-16 h-12 hidden pp:block"
      />
    </Link>
  );
}
