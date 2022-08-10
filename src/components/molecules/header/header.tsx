import { useNavigate } from "react-router-dom";
import { Button } from "../../atoms";

export default () => {
  const navigate = useNavigate();
  return (
    <nav className="bg-slate-200 text-white p-3 flex justify-between items-center">
      <a
        className="text-3xl tracking-widest no-underline uppercase cursor-pointer text-black"
        onClick={() => navigate("/")}
      >
        Learn-JS-with-Fer
      </a>
      <div className="flex gap-4">
        <Button onClick={() => navigate("/fer-profile")}>Conheça o Fer</Button>
        <Button onClick={() => navigate("/login")}>Admin</Button>
      </div>
    </nav>
  );
};
