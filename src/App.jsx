import React, {useEffect, useState} from "react";
import {Navigation} from "./components/navigation";
import {Header} from "./components/header";
import {About} from "./components/about";
import {Services} from "./components/services";
import {Gallery} from "./components/gallery";
import {Testimonials} from "./components/testimonials";
import {Team} from "./components/Team";
import {Contact} from "./components/contact";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import "./App.css";
import SeoHelmet from "./components/SeoHelmet";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <div>
        <SeoHelmet
            title="Белтехавтоматик - Производитель электрощитового оборудования"
            description="Производитель электрощитового оборудования. Комплектуем и собираем шкафы на любом оборудовании. Качество и надежность."
            keywords="электрощитовое оборудование, производитель электрощитов, Беларусь, электротехника"
        />
      <Navigation />
      <Header data={landingPageData.Header} />
      <About data={landingPageData.About} />
      <Services data={landingPageData.Services} />
        <Testimonials data={landingPageData.Testimonials} />
        <Team data={landingPageData.Team}/>
      <Gallery data={landingPageData.Gallery} />

      <Contact data={landingPageData.Contact} />
    </div>
  );
};

export default App;
