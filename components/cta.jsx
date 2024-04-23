import React from 'react';
import Container from './container';
import usePopupStore from './popupStore';
import Link from 'next/link';

const Cta = () => {
  const { togglePopup } = usePopupStore();

  return (
    <Container>
      <div id='contato' className="flex flex-wrap items-center justify-between w-full max-w-4xl gap-5 mx-auto text-white bg-green px-7 py-7 lg:px-12 lg:py-12 lg:flex-nowrap rounded-xl">
        <div className="flex-grow text-center lg:text-left">
          <h2 className="text-2xl font-medium lg:text-3xl">
            Ainda restam dúvidas? Chame a gente!
          </h2>
          <p className="mt-2 font-medium text-white text-opacity-90 lg:text-base">
            Dê voz às mulheres: traga nossa palestra para sua comunidade ou
            empresa. Entre em contato conosco pelo e-mail:
          </p>
          <Link
            href="mailto:institutolanternaluminosa@gmail.com"
            className="text-yellow hover:underline font-bold"
            target="_blank"
          >
            institutolanternaluminosa@gmail.com
          </Link>
          <p>Entre em contato conosco pelo WhatsApp nos seguintes números:</p>
          <Link
            href="https://wa.me/+5541998309091"
            className="text-yellow hover:underline font-bold"
            target="_blank"
          >
          (41) 99830-9091
          </Link>
          <span> e </span>
          <Link
            href="https://wa.me/+554191641633"
            className="text-yellow hover:underline font-bold"
            target="_blank"
          >
          (41) 9164-1633
          </Link>
          <p className="mt-2 font-medium text-yellow text-opacity-90 lg:text-xl">
            Não deixe para depois!
          </p>
        </div>
        <div className="flex-shrink-0 w-full text-center lg:w-auto">
          <button
            onClick={togglePopup}
            className="inline-block py-3 mx-auto text-lg font-medium text-center text-green bg-white rounded-md px-7 lg:px-10 lg:py-5 "
          >
            Contate-nos
          </button>
        </div>
      </div>
    </Container>
  );
};

export default Cta;
