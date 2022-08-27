import { useNavigate } from "react-router-dom";
import { Button } from "../../atoms";

export default () => {
  const navigate = useNavigate();
  return (
    <nav className="text-center text-xl flex justify-between items-center p-2 gap-1 bg-slate-200">
      <a
        className="text-sm uppercase  tracking-widest sm:text-lg lg:text-3xl"
        onClick={() => navigate("/")}
      >
        Learn-JS-with-Fer
      </a>

      <div className="flex gap-4">
        <Button onClick={() => navigate("/fer-profile")}>Conheça o Fer</Button>
        <Button className="hidden xl:block" onClick={() => navigate("/login")}>
          Admin
        </Button>
      </div>
    </nav>
  );
};
