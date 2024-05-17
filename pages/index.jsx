import Head from "next/head";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import SectionTitle from "../components/sectionTitle";

import Image from "next/image";
import Vaquinha from "../components/Vaquinha";
import Benefits from "../components/benefits";
import Contribuidores from "../components/contribuidores";
import Cta from "../components/cta";
import { benefitOne, benefitTwo } from "../components/data";
import Faq from "../components/faq";
import Footer from "../components/footer";
import PopupWidget from "../components/popupWidget";
import Testimonials from "../components/testimonials";
import Video from "../components/video";

const Home = () => {
  return (
    <>
      <Head>
        <title>Home | Instituto Lanterna Luminosa</title>
      </Head>
      <Navbar />
      <Hero />
      <Image
        src="/img/wave.svg"
        width={1440}
        height={389}
        className="absolute w-full"
        alt="WaveImg"
      />
      <SectionTitle
        titleClassName="pt-[110px] md:pt-[300px]"
        title="Sobre nós"
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
      legislativo, judiciário e outras organizações do terceiro setor."
      ></SectionTitle>
      <div className="bg-[#EDEDED]">
        <Benefits data={benefitOne} />
        <Benefits imgPos="right" data={benefitTwo} fullIcon />
        <Vaquinha />
      </div>
      <SectionTitle pretitle="Watch a video" title="Vídeo institucional:">
        This section is to highlight a promo or demo video of your product.
        Analysts says a landing page with video has 3% more conversion rate. So,
        don&apos;t forget to add one. Just like this.
      </SectionTitle>
      <Video src="./video/video-institucional.mp4" />
      <div className="text-center text-lg">
        Assista mais vídeos em:
        <a
          className="text-blue-400 font-semibold hover:font-bold"
          href="https://www.instagram.com/institutolanternaluminosa/"
          target="_blank"
        >
          {" "}
          @lanternaluminosa
        </a>
        ,
        <a
          className="text-blue-400 font-semibold hover:font-bold"
          href="https://www.instagram.com/emmaresdesereios/"
          target="_blank"
        >
          {" "}
          @emmaresdesereios{" "}
        </a>
        e
        <a
          className="text-blue-400 font-semibold hover:font-bold"
          href="https://www.instagram.com/conexoesreaispodcast/"
          target="_blank"
        >
          {" "}
          @conexoesreaispodcast
        </a>
        .
      </div>
      {/*<SectionTitle pretitle="Testimonials" title="Depoimentos">
        Testimonails is a great way to increase the brand trust and awareness.
        Use this section to highlight your popular customers.
      </SectionTitle>
      <Testimonials />*/}
      <SectionTitle pretitle="FAQ" title="Perguntas Frequentes">
        Answer your customers possible questions here.
      </SectionTitle>
      <Faq />
      <Cta />
      {/*<Contribuidores />*/}
      <Footer />
      <PopupWidget />
    </>
  );
};

export default Home;
