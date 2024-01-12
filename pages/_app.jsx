import { ThemeProvider } from "next-themes";
import "../css/tailwind.css";
import { TranslationProvider } from '../components/TranslationContext';

function MyApp({ Component, pageProps }) {
  return (
    <TranslationProvider>
    <ThemeProvider attribute="class">
      <Component {...pageProps} />
    </ThemeProvider>
    </TranslationProvider>
  );
}

export default MyApp;
