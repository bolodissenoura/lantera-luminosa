import React from 'react';
import Container from './container';
import usePopupStore from './popupStore';
import Link from 'next/link';

const Cta = () => {
  const { togglePopup } = usePopupStore();

  return (
    <Container>
      <div
        id="contato"
        className="flex flex-col flex-wrap text-center items-center justify-center w-full max-w-4xl gap-5 mx-auto text-white bg-green px-7 py-7 lg:px-12 lg:py-12 lg:flex-nowrap rounded-xl"
      >
        <h2 className="text-2xl font-medium lg:text-4xl">
          Ainda restam dúvidas? Chame a gente!
        </h2>
        <p className="mt-2 font-medium text-white text-opacity-90 lg:text-2xl">
          Dê voz às mulheres: traga nossa palestra para sua comunidade ou
          empresa. Entre em contato conosco pelo e-mail:
        </p>
        <Link
          href="mailto:institutolanternaluminosa@gmail.com"
          className="text-yellow hover:underline font-bold text-3xl"
          target="_blank"
        >
          institutolanternaluminosa@gmail.com
        </Link>
        <p className="font-medium text-white text-opacity-90 lg:text-2xl">
          Entre em contato conosco pelo WhatsApp nos seguintes números:
        </p>
        <div className="flex gap-8 justify-center">
          {' '}
          <Link
            href="https://wa.me/+5541998309091"
            className="inline-block py-3 text-lg font-primary text-center text-green bg-yellow rounded-lg px-7 lg:px-5 lg:py-3 hover:underline font-bold"
            target="_blank"
          >
            (41) 99830-9091
          </Link>
          <Link
            href="https://wa.me/+554191641633"
            className="inline-block py-3 text-lg font-primary text-center text-green bg-yellow rounded-lg px-7 lg:px-5 lg:py-3 hover:underline font-bold"
            target="_blank"
          >
            (41) 99164-1633
          </Link>
        </div>
        <p className="font-medium text-yellow text-opacity-90 lg:text-xl ">
          Não deixe para depois!
        </p>
        <button
          onClick={togglePopup}
          className="inline-block py-3 mx-auto text-lg font-medium px-7 lg:px-5 text-center text-green bg-white rounded-md w-full"
        >
          Contate-nos
        </button>
      </div>
    </Container>
  );
};

export default Cta;
