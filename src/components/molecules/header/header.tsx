import { useNavigate } from "react-router-dom";
import { Button } from "../../atoms";

export default () => {
  const navigate = useNavigate();
  return (
    <nav className="bg-black text-white p-3 flex justify-between">
      <a
        className="text-4xl tracking-widest no-underline uppercase cursor-pointer text-blue-600"
        onClick={() => navigate("/")}
      >
        Aprenda Javascript
      </a>
      <div className="flex gap-2">
        <Button onClick={() => navigate("/")}>Home</Button>
        <Button onClick={() => navigate("/sobre")}>Sobre</Button>
        <Button onClick={() => navigate("/trabalhe-conosco")}>
          Trabalhe conosco
        </Button>
      </div>
    </nav>
  );
};
