import { ComponentProps } from "react";

type TTitle = {
  children: string;
} & ComponentProps<"h1">;

("text-[#E1D7D7] font-bold text-2xl w-96");
export default (props: TTitle) => (
  <h1
    {...props}
    className={`text-[#E1D7D7] text-lg font-bold ${props.className} sm:text-2xl md:text-4xl`}
  >
    {props.children}
  </h1>
);
