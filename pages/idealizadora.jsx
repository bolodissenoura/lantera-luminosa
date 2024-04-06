import Navbar from "../components/navbar";
import Footer from "../components/footer";
import PopupWidget from "../components/popupWidget";
import Head from "next/head";

const idealizadora = () => {
  return (
    <>
      <Head>
        <title>Sobre | Instituto Lanterna Luminosa</title>
      </Head>
      <Navbar />
      <main className="text-center py-[25%]">
        Um texto sobre o instituto.
      </main>
      <Footer />
      <PopupWidget />
    </>
  );
};

export default idealizadora;
