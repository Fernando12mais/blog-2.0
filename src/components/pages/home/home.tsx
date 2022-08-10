import fotoFer from "../../../assets/FotoPerfilFernando.jpg";
import html5 from "../../../assets/html5.png";
import css3 from "../../../assets/css3.png";
import js from "../../../assets/js.png";
import { Button, Title } from "../../atoms";
import { useNavigate } from "react-router-dom";

const dataContainers = [
  { img: html5, title: "HTML5", to: "/" },
  { img: css3, title: "CSS3", to: "/" },
  { img: js, title: "JAVASCRIPT", to: "/article" },
];

export default () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col gap-8 bg-[#2E2B2B] ">
      <img
        className="w-full h-[300px]"
        src={
          "https://free4kwallpapers.com/uploads/originals/2021/02/04/future-tech-city-wallpaper.jpg"
        }
      />
      <div className="flex items-center justify-center px-8 gap-8 justify-center h-[200px] w-full">
        <img className="h-full rounded-md" src={fotoFer} />
        <div className="flex flex-col gap-4">
          <Title>APRENDA HTML, CSS E JAVASCRIPT COMIGO!!!</Title>
          <Title>
            Vou ensinar passo a passo de cada uma dessas linguagens. Selecione
            abaixo às aulas.
          </Title>
        </div>
      </div>
      <div className="flex justify-center items-center gap-24 bg-gradient-to-b from-[#36ACFE] to-[#000000] h-[600px] w-full">
        {dataContainers.map((container, index) => (
          <div
            className="flex flex-col gap-4 justify-center items-center w-2/12 bg-white h-3/6 rounded-3xl shadow-[28px_4px_30px_#00000040]"
            key={index}
          >
            <img className="w-24 h-24" src={container.img} />
            <p className="text-2xl text-black">{container.title}</p>
            <Button onClick={() => navigate(container.to)}>
              Acessar Conteúdo
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};
