import { TBaseText } from "../../../models";

export default ({ children }: TBaseText) => (
  <span className="p-1 bg-pink-600 rounded text-white bold mx-1 text-base">
    {children}
  </span>
);
