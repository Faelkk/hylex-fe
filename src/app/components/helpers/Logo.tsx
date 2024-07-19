import { cn } from "@/functions/cn";
import Image from "next/image";
import Link from "next/link";

interface LogoProps {
  className?: string;
}

export default function Logo(classname: LogoProps) {
  return (
    <Link href="/">
      <Image
        src="/icons/Logo.svg"
        width={32}
        height={32}
        alt="Logo Hylex"
        className={cn("w-16 h-12 hidden pp:block", classname)}
      />
    </Link>
  );
}
