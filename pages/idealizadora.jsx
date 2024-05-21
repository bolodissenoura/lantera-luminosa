import Navbar from '../components/navbar';
import Footer from '../components/footer';
import PopupWidget from '../components/popupWidget';
import Head from 'next/head';
import SectionTitle from '../components/sectionTitle';
import Director from '../components/director';

const directors = [
  {
    name: 'Flávia Ohde',
    url: '/img/directors/FláviaOhde.png',
    width: 540,
    height: 303.5,
  },
  {
    name: 'Dani Chrisostomo',
    url: '/img/directors/DaniChrisostomo.png',
    width: 540,
    height: 303.5,
  },
  {
    width: 540,
    name: 'Cida Dornelles',
    url: '/img/directors/CidaDornelles.png',
    height: 960,
  },
  {
    width: 540,
    name: 'Alice Secchi',
    url: '/img/directors/AliceSecchi.png',
    height: 960,
  },
  {
    width: 540,
    name: 'Matheus Passarin Bio',
    url: '/img/directors/MatheusPassarinBio.png',
    height: 960,
  },
  {
    name: 'Emanoelli Secchi ',
    url: '/img/directors/EmanoelliSecchi.png',
    width: 540,
    height: 303.5,
  },
  {
    width: 540,
    name: 'Giovana Damazio Moreira ',
    url: '/img/directors/GiovanaDamazio.png',
    height: 960,
  },
];

const piers = [
  'Pier da educação e cultura',
  'Pier da ação social',
  'Pier da profissão',
  'Pier das finanças',
  'Pier da saúde física, sexual e mental',
  'Pier do esporte',
  'Pier da emoção',
  'Pier da justiça',
  'Pier da segurança',
  'Pier da autoestima e autoconhecimento',
  'Pier da espiritualidade',
];

const idealizadora = () => {
  return (
    <>
      <Head>
        <title>Sobre | Instituto Lanterna Luminosa</title>
      </Head>
      <Navbar />
      <section className="py-12 px-24 flex flex-col items-center text-center">
        <SectionTitle
          title="Instituto Lanterna Luminosa"
          paragraph1="O Instituto Lanterna Luminosa é uma Associação Civil de Terceiro Setor
          dedicada ao combate do abuso contra mulheres e seus filhos. Nosso
          compromisso é amplo, abrangendo desde a prevenção de todos os tipos de
          abusos até o apoio e fortalecimento da mulher que se encontra em uma
          relação abusiva."
          paragraph2="Atuamos de maneira integral, fornecendo suporte essencial em todos os
          aspectos da vida das mulheres afetadas, incluindo as áreas: profissional,
          financeira, jurídica, de segurança, saúde, autoestima, emocional e
          espiritual. Valorizamos uma abordagem humanizada, regida por
          princípios como respeito, ética, solidariedade, proatividade,
          comprometimento e consciência."
          paragraph3={`Um dos nossos diferenciais é a forma inovadora e lúdica com que
          abordamos temas sensíveis relacionados ao abuso e à violência
        doméstica. O projeto "Em Mares de Sereios" exemplifica essa abordagem,
      utilizando palestras musicais, vídeos, livros, ebooks, podcasts, redes
      sociais e piers de atendimento, sejam eles presenciais ou online.`}
          paragraph4="Os piers de atendimento abrangem todas as áreas da vida das mulheres
      afetadas, visando auxiliar na retomada de sua autonomia e
      protagonismo. Contamos com a participação de voluntários, empresas
      públicas, mistas e privadas, secretarias governamentais, poder
      legislativo, judiciário e outras organizações do terceiro setor:"
        ></SectionTitle>
        <ul className="flex gap-4 flex-wrap justify-center items-center max-w-7xl pb-16">
          {piers.map((pier) => {
            return (
              <li className="font-medium px-4 py-2 text-lg w-96 font-primary text-yellow bg-zinc-900 rounded-lg select-none">
                {pier}
              </li>
            );
          })}
        </ul>
        <p className="max-w-6xl font-primary  text-lg leading-normal text-gray-500 lg:text-xl xl:text-xl">
          Com esta forma integrada de ações responsáveis e efetivas, objetivamos
          desenvolver novos e saudáveis comportamentos na sociedade, assegurando
          os direitos e a segurança da mulher e de seus filhos, para que tenham
          uma situação de vida mais justa, digna, segura e feliz. Junte-se a nós
          nesta missão!!
        </p>
        <h3 className="max-w-2xl pt-14 text-3xl font-primary leading-snug tracking-tight lg:leading-tight lg:text-4xl">
          Diretores da Ong:
        </h3>
        <div className="flex flex-wrap pt-8 gap-8 justify-center container">
          {directors.map((director, index) => (
            <Director key={index} director={director} />
          ))}
        </div>
      </section>
      <Footer />
      <PopupWidget />
    </>
  );
};

export default idealizadora;
