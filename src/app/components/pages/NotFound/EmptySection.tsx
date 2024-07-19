import Link from "next/link";

interface EmptySectionProps {
  text: string;
  buttonText?: string;
  linkHref: string;
  linkText: string;
  isRenderAdd?: boolean;
}

export default function EmptySection({
  text,
  buttonText,
  linkHref,
  linkText,
  isRenderAdd,
}: EmptySectionProps) {
  return (
    <div className="mt-5">
      <div className="flex flex-col-reverse gap-4 md:flex-row md:gap-0 justify-between">
        <p className="font-roboto text-black-100 text-[20px] max-w-[600px]">
          {text}
        </p>
        {isRenderAdd && (
          <button className="bg-black-400 font-poppins text-white p-2 rounded-[5px] max-w-[300px] w-full text-[15px] pp:text-[16px] text-center">
            {buttonText}
          </button>
        )}
      </div>
      <Link
        className="bg-blue-100 hover:bg-blue-200 transition-colors font-poppins uppercase tracking-wide text-[15px] pp:text-[18px] p-3 max-w-[300px] w-full rounded-[5px] mt-5 
          drop-shadow-md text-gray-0 flex justify-center"
        href={linkHref}
      >
        {linkText}
      </Link>
    </div>
  );
}
