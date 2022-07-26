import { TBaseText } from "../../../models";

export default ({ children }: TBaseText) => (
  <h2 className="text-amber-300 text-base md:text-lg lg:text-3xl tracking-wide">
    {children}
  </h2>
);
