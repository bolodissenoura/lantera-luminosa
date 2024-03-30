import Navbar from "../components/navbar";
import Footer from "../components/footer";
import PopupWidget from "../components/popupWidget";

const idealizadora = () => {
  return (
    <>
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
