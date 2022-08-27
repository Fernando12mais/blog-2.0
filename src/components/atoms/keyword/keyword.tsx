import { TBaseText } from "../../../models";

export default ({ children }: TBaseText) => (
  <span className="px-1 bg-slate-300 rounded text-slate-700 font-bold mx-1 text-base md:text-lg lg:text-xl">
    {children}
  </span>
);
