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
        className="hidden w-full xl:block "
        src={
          "https://free4kwallpapers.com/uploads/originals/2021/02/04/future-tech-city-wallpaper.jpg"
        }
      />
      <div className="p-4 flex flex-col gap-6 sm:flex-row">
        <img className="h-full rounded-md sm:w-1/2" src={fotoFer} />
        <div className="flex flex-col gap-4 md:justify-center">
          <Title className="uppercase">
            aprenda html,css e javascript comigo !!!
          </Title>
          <Title>
            Vou ensinar passo a passo de cada uma dessas linguagens. Selecione
            abaixo às aulas.
          </Title>
        </div>
      </div>
      <div className="flex flex-col items-center bg-gradient-to-b from-[#814dc9] to-[#000000] p-8 gap-6 md:flex-row md:justify-center lg:h-[700px]">
        {dataContainers.map((container, index) => (
          <div
            className="bg-white flex flex-col gap-4 p-8 justify-center items-center rounded-3xl shadow-[28px_4px_30px_#00000040] lg:gap-8"
            key={index}
          >
            <img
              className="w-24 h-24 lg:w-32 lg:h-32 xl:w-40 xl:h-40"
              src={container.img}
            />
            <p className="text-lg text-black lg:text-4xl">{container.title}</p>
            <Button onClick={() => navigate(container.to)}>
              Acessar Conteúdo
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};
