import { TBaseText } from "../../../models";

export default ({ children }: TBaseText) => (
  <p className="text-teal-500 tracking-wide text-sm  md:text-lg lg:text-2xl font-medium">
    {children}
  </p>
);
