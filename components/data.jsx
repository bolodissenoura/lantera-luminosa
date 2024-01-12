import {
  HeartIcon,
  FaceFrownIcon,
} from "@heroicons/react/24/solid";


import benefitOneImg from "../public/img/dataphoto1.jpg";
import benefitTwoImg from "../public/img/dataphoto2.jpg";

const benefitOne = {
  title: "Compreensão Profunda ❤️",
  desc: "O Instituto Lanterna Luminosa (ILL) dedica-se ao combate do abuso contra mulheres e seus filhos, proporcionando apoio abrangente para um reinício seguro e saudável em diversas áreas da vida.",
  image: benefitOneImg,
  bullets: [
    {
      title: "A triste realidade",
      desc: "O abuso contra mulheres persiste como uma triste realidade, desafiando os esforços para construir uma sociedade justa e igualitária.",
      icon: <FaceFrownIcon />,
    },
    {
      title: "A violência",
      desc: "A violência de gênero atinge mulheres em todas as esferas da vida, perpetuando um ciclo de sofrimento que exige ação imediata.",
      icon: <FaceFrownIcon />,
    },
    {
      title: "O medo",
      desc: "O medo de denunciar os agressores muitas vezes silencia as vítimas, ressaltando a necessidade urgente de centros de orientação e apoio.",
      icon: <FaceFrownIcon />,
    },
  ],
};


const benefitTwo = {
  title: "Voz com poder ☀️",
  desc: "Engajado na promoção do empoderamento feminino, o ILL trabalha incansavelmente para desafiar e superar a triste realidade do abuso contra mulheres, oferecendo um suporte holístico para reinícios vibrantes e saudáveis.",
  image: benefitTwoImg,
  bullets: [
    {
      title: "Resiliência Triunfante",
      desc: "A resiliência das mulheres diante do abuso é uma poderosa narrativa de superação, desafiando as sombras dessa triste realidade e construindo um caminho para uma sociedade mais justa e igualitária.",
      icon: <HeartIcon />,
    },
    {
      title: "Ciclo de Transformação",
      desc: "Apesar da violência de gênero persistente, cada mulher é uma força inquebrável, capaz de transformar o ciclo de sofrimento em um ciclo de cura e crescimento.",
      icon: <HeartIcon />,
    },
    {
      title: "Coragem que Inspira",
      desc: "A coragem de denunciar abusos, mesmo diante do medo, é um testemunho inspirador da força interior das mulheres, ressaltando a necessidade premente de centros de apoio e orientação para encorajar e fortalecer.",
      icon: <HeartIcon />,
    },
  ],
};


export {benefitOne, benefitTwo};
