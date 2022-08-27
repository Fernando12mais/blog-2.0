import { ComponentProps } from "react";

type TButton = {
  children: string;
  onClick: () => void;
} & ComponentProps<"button">;

export default (props: TButton) => (
  <button
    {...props}
    className={`shadow-[15px_13px_14px_0px_#324E7840] p-3 bg-[#798DD3] rounded-md text-white text-base hover:bg-blue-500 sm:text-lg ${props.className} lg:text-3xl`}
  >
    {props.children}
  </button>
);
