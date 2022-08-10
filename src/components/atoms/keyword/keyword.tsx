import { TBaseText } from "../../../models";

export default ({ children }: TBaseText) => (
  <span className="p-1 bg-slate-300 rounded text-slate-700 font-bold mx-1 text-base">
    {children}
  </span>
);
