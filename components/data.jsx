import { HeartIcon, FaceFrownIcon } from "@heroicons/react/24/solid";

import benefitOneImg from "../public/img/dataphoto1.jpg";
import benefitTwoImg from "../public/img/dataphoto2.jpg";

const benefitOne = {
  title: "Compreensão Profunda",
  desc: "O Instituto Lanterna Luminosa (ILL) dedica-se ao combate do abuso contra mulheres e seus filhos, proporcionando apoio abrangente para um reinício seguro e saudável em diversas áreas da vida.",
  image: benefitOneImg,
  bullets: [
    {
      title: "A triste realidade",
      desc: (<span>O abuso contra mulheres persiste como uma triste realidade, desafiando os esforços para construir uma sociedade justa e igualitária.
      <br/><br/>Os dados oficiais sobre a violência são alarmantes:
      <br/><br/>
      &nbsp;&nbsp;&nbsp;&nbsp;O Brasil ocupa 5º lugar no ranking mundial de feminicídio (Dados: Alto Comissariado das Nações Unidas para os Direitos Humanos)
      <br/> <br/>
      &nbsp;&nbsp;&nbsp;&nbsp;Mais de 18 milhões de mulheres sofreram violência em 2022/em média, vítimas relataram ter sofrido quatro agressões no ano (Dados da quarta edição da Pesquisa Vísivel e Invisível : A Vitimização das Mulheres no Brasil, Realizada pelo Fórum Brasileiro de Segurança Pública)
      <br/><br/>
      &nbsp;&nbsp;&nbsp;&nbsp;O Paraná é o 3º estado em casos de feminícidio no Brasil, aponta estudo (Relatório elaborado pelo Universidade Estadual de Londrina (UEL) contabilizou casos de feminícidio consumados e tentados no primeiro semestre de 2023 no Brasil)</span>),
      icon: <FaceFrownIcon />,
    },
    {
      title: "A violência",
      desc: "Estão previstos cinco tipos de violência doméstica e familiar contra a mulher na Lei Maria da Penha: física, psicológica, moral, sexual e patrimonial.",
      icon: <FaceFrownIcon />,
    },
    {
      title: "O medo",
      desc: "O medo de denunciar os agressores muitas vezes silencia as vítimas, ressaltando a necessidade urgente de centros de orientação e apoio.",
      icon: <FaceFrownIcon />,
    },
    {
      title: "As dependências",
      desc: "Muitas vezes as mulheres não conseguem sair das relações abusivas e se libertar do parceiro abusador por conta da dependência emocional e financeira que as prendem à situação, visto que tantas mulheres abrem mão de sua vida profissional para cuidar de seus filhos e do parceiro, consequentemente, ficando sem recursos financeiros para se sustentar em caso de separação.",
      icon: <FaceFrownIcon/>,
    },
  ],
};

const benefitTwo = {
  title: "Voz com poder",
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
      desc: "A coragem de denunciar abusos mesmo diante do medo é um testemunho inspirador da força interior das mulheres, ressaltando a necessidade premente de centros de apoio e orientação para encorajar e fortalecer.",
      icon: <HeartIcon />,
    },{
      title: "Autonomia que liberta",
      desc: "O ILL incentiva e auxilia a mulher a alcançar  ou resgatar a autonomia em todas as áreas de sua vida: emocional, intelectual, profissional e financeira.",
      icon: <HeartIcon />,
    },
  ],
};

export { benefitOne, benefitTwo };
