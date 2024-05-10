import { cn } from "@/functions/cn";
import { ReactNode } from "react";

export default function Container({
  children,
  classname,
}: {
  children: ReactNode;
  classname?: string;
}) {
  return (
    <section className={cn("flex-1 flex ", classname)}>{children}</section>
  );
}
