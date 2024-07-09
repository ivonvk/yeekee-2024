import { useRouter } from "next/router";
import { useEffect } from "react";
import { SSRProvider } from "@react-aria/ssr";
import { IntlProvider } from "react-intl";

import zh_HK from "../translations/zh-HK.json";

import "bootstrap/dist/css/bootstrap.min.css";

import "../styles/globals.scss";
import { initGA } from "../lib/analytics";
import { PagesProvider } from "../contexts/pages/use-pages";

import "../../i18n";
import ScrollToTopBtn from "../components/Button/ScrollToTopBtn";
const messages: any = {
  "zh-HK": zh_HK
  
};

function MyApp({ Component, pageProps }: any) {
  const router = useRouter();
  const { locale, defaultLocale } = router;
  const localeMessages = messages[locale as string];
  useEffect(() => {
    // console.log(`initGA: ${process.env.NEXT_PUBLIC_GA_PROPERTY}`);
    initGA(process.env.NEXT_PUBLIC_GA_PROPERTY);

    function appHeight() {
      const doc = document.documentElement;
      doc.style.setProperty("--vh", window.innerHeight * 0.01 + "px");
    }
    window.addEventListener("resize", appHeight);
    appHeight();
  }, []);

  return (
    <SSRProvider>
      <IntlProvider
        messages={localeMessages}
        locale={locale as string}
        defaultLocale={defaultLocale}
      >
        <PagesProvider>

        <Component {...pageProps} />
        <ScrollToTopBtn/>

        </PagesProvider>
      </IntlProvider>
    </SSRProvider>
  );
}
export default MyApp;
