import "../css/tailwind.css";
import { TranslationProvider } from "../components/TranslationContext";

function MyApp({ Component, pageProps }) {
  return (
    <TranslationProvider>
      <Component {...pageProps} />
    </TranslationProvider>
  );
}

export default MyApp;
