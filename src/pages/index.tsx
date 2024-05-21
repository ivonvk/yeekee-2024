import { SEO } from "../components/seo";
import type { NextPage } from "next";

import { useEffect } from "react";
import { usePages } from "../contexts/pages/use-pages";
import { PagesType } from "../types/pages";
import router from "next/router";
import { useTranslation } from "react-i18next";

interface HomeProps {
}
const Home: NextPage<HomeProps> = ({}) => {
  const { t } = useTranslation();

  const pagesContext = usePages();
  useEffect(()=>{
    pagesContext.setPages(PagesType.homepage)
    router.push('/homepage')
  },[])
  return (
    <>
      <SEO
        title={t("seo.title_long")}
        description={t("seo.description")}
      />
     
      
  
    </>
  );
};

export default Home;
