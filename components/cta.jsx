import React from "react";
import Container from "./container";
import usePopupStore from "./popupStore";

const Cta = () => {
  const { togglePopup } = usePopupStore();

  return (
    <Container>
      <div className="flex flex-wrap items-center justify-between w-full max-w-4xl gap-5 mx-auto text-white bg-green px-7 py-7 lg:px-12 lg:py-12 lg:flex-nowrap rounded-xl">
        <div className="flex-grow text-center lg:text-left">
          <h2 className="text-2xl font-medium lg:text-3xl">
            Ainda restou dúvidas? Chame a gente 👉🏻
          </h2>
          <p className="mt-2 font-medium text-white text-opacity-90 lg:text-base">
            {/*Fiquem a vontade para alterar.É apenas uma ideia*/ }
            Transforme seu evento com a Palestra Lanterna Luminosa! 
            <br />
            Entre em contato conosco: 
            <a
              href="mailto:institutolanternaluminosa@gmail.com"
              className="text-yellow hover:underline"
              target="_blank"
            >
              institutolanternaluminosa@gmail.com
            </a>
            <br />
            Ou então contate a presidente pelo WhatsAPP:
            <a
              href="https://wa.me/+554191641633"
              className="text-yellow hover:underline"
              target="_blank"
            >
              +55 41 9164-1633 (Emanoelli)
            </a>
          </p>
          <p className="mt-2 font-medium text-yellow text-opacity-90 lg:text-xl">
            Não deixe para depois.
          </p>
        </div>
        <div className="flex-shrink-0 w-full text-center lg:w-auto">
          <button
            onClick={togglePopup}
            className="inline-block py-3 mx-auto text-lg font-medium text-center text-green bg-white rounded-md px-7 lg:px-10 lg:py-5 "
          >
            Contate nos
          </button>
        </div>
      </div>
    </Container>
  );
};

export default Cta;
