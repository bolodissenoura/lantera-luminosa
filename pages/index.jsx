import Head from "next/head";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import SectionTitle from "../components/sectionTitle";

import { benefitOne, benefitTwo } from "../components/data";
import Video from "../components/video";
import Benefits from "../components/benefits";
import Footer from "../components/footer";
import Testimonials from "../components/testimonials";
import Cta from "../components/cta";
import Faq from "../components/faq";
import PopupWidget from "../components/popupWidget";
import Image from "next/image";
import Contribuidores from "../components/contribuidores";
import Vaquinha from "../components/Vaquinha";

const Home = () => {
  return (
    <>
      <Head />
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
          aspectos da vida das mulheres afetadas, incluindo as áreas profissional,
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
      ></SectionTitle >
      <div className="bg-[#EDEDED]">
        <Benefits data={benefitOne} />
        <Benefits imgPos="right" data={benefitTwo} />
        <Vaquinha />
      </div>
      <SectionTitle pretitle="Watch a video" title="Nossos vídeos">
        This section is to highlight a promo or demo video of your product.
        Analysts says a landing page with video has 3% more conversion rate. So,
        don&apos;t forget to add one. Just like this.
      </SectionTitle>
      <Video
        src="https://www.youtube-nocookie.com/embed/VQ-6WzP9vS4?controls=0&autoplay=0"
        src2="https://www.youtube.com/embed/D0UnqGm_miA"
      />
      <Video
        src="https://www.youtube-nocookie.com/embed/VQ-6WzP9vS4?controls=0&autoplay=0"
        src2="https://www.youtube.com/embed/D0UnqGm_miA"
      />
      <SectionTitle pretitle="Testimonials" title="Depoimentos">
        Testimonails is a great way to increase the brand trust and awareness.
        Use this section to highlight your popular customers.
      </SectionTitle>
      <Testimonials />
      <SectionTitle pretitle="FAQ" title="Perguntas Frequentes">
        Answer your customers possible questions here, it will increase the
        conversion rate as well as support or chat requests.
      </SectionTitle>
      <Faq />
      <Cta />
      <Contribuidores />
      <Footer />
      <PopupWidget />
    </>
  );
};

export default Home;
