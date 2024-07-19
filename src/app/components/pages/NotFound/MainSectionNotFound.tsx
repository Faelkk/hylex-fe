import { ReactNode } from "react";

export default function MainSectionNotFound({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <main className="flex w-full flex-1 justify-center mt-20">
      <section className="flex flex-col w-[95%]">{children}</section>
    </main>
  );
}
