import "i18next";
import "../lib/i18n";
import Image from 'next/image';
import { useTranslationContext } from "./TranslationContext";

const LanguageChanger = () => {
  
  const { handleChangeLanguagePT, handleChangeLanguageEN, currentLanguage } =
  useTranslationContext();
  return (
    <><button
      onClick={handleChangeLanguagePT}
      className={`flex text-2xl justify-center items-center ${currentLanguage === 'pt' ? 'bg-[#5F6369] text-white' : 'bg-white text-[#5F6369]'} gap-2 rounded-l-md w-[80px] h-[40px]`}
    >
      <Image src="brazil.svg" width={24} height={24} alt="icone do brasil" />
      PT
    </button><button
      onClick={handleChangeLanguageEN}
      className={`flex text-2xl justify-center items-center ${currentLanguage === 'en' ? 'bg-[#5F6369] text-white' : 'bg-white text-[#5F6369]'} gap-2 rounded-r-md w-[80px] h-[40px]`}
    >
        <Image src="eua.svg" width={24} height={24} alt="icone do eua" />
        EN
      </button></>
  );
};

export default LanguageChanger;
