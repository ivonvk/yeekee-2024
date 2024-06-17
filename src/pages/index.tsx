import { SEO } from "../components/seo";
import type { NextPage } from "next";

import { useEffect } from "react";
import { usePages } from "../contexts/pages/use-pages";
import { PagesType } from "../types/pages";
import router, { useRouter } from "next/router";
import { useTranslation } from "react-i18next";

interface HomeProps {
}
const Home: NextPage<HomeProps> = ({}) => {
  const { t } = useTranslation();
  const { locale } = useRouter();

  const pagesContext = usePages();
  useEffect(()=>{
    pagesContext.setPages(PagesType.homepage)
    router.push(`/${locale}/homepage`)
  },[])
  return (
    <>
      <SEO
        title={t("seo.title_long")}
        description={t("seo.description")}
        canonical="https://yk-ee.hk"
      />
     
      
  
    </>
  );
};

export default Home;
