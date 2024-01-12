import { TFunction } from "i18next";
import "i18next";
import React, {
  createContext,
  useContext,
  ReactNode,
  useState,
  Dispatch,
  SetStateAction,
} from "react";
import { useTranslation } from "react-i18next"; // Substitua 'sua-lib-de-traducao' pela biblioteca que você está usando

interface TranslationContextProps {
  t: TFunction;
  changeLanguage: (lang: string) => void;
  language: string;
  currentLanguage: string;
  setCurrentLanguage: Dispatch<SetStateAction<string>>;
  handleChangeLanguagePT: () => void;
  handleChangeLanguageEN: () => void;
}

const TranslationContext = createContext<TranslationContextProps | undefined>(
  undefined
);

export const useTranslationContext = () => {
  const context = useContext(TranslationContext);
  if (!context) {
    throw new Error(
      "useTranslationContext must be used within a TranslationProvider"
    );
  }
  return context;
};

interface TranslationProviderProps {
  children: ReactNode;
}

export const TranslationProvider: React.FC<TranslationProviderProps> = ({
  children,
}) => {
  const {
    t,
    i18n: { changeLanguage, language },
  } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState("pt");

  const handleChangeLanguagePT = () => updateLanguage("pt");

  const handleChangeLanguageEN = () => updateLanguage("en");

  const updateLanguage = (newLanguage: "pt" | "en") => {
    changeLanguage(newLanguage);
    setCurrentLanguage(newLanguage);
  };

  return (
    <TranslationContext.Provider
      value={{
        t,
        changeLanguage,
        language,
        currentLanguage,
        setCurrentLanguage,
        handleChangeLanguagePT,
        handleChangeLanguageEN,
      }}
    >
      {children}
    </TranslationContext.Provider>
  );
};
