import React, {useEffect, useState} from "react";
import {Navigation} from "./components/navigation";
import {Header} from "./components/header";
import {About} from "./components/about";
import {ServicesMap} from "./components/servicesMap";
import {Gallery} from "./components/gallery";
import {Testimonials} from "./components/testimonials";
import {Team} from "./components/Team";
import {Contact} from "./components/contact";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import "./App.css";
import SeoHelmet from "./components/SeoHelmet";
import {Services} from "./components/services";

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
        <ServicesMap data={landingPageData.Services} />
        <Team data={landingPageData.Team}/>
<Services/>
        <Testimonials data={landingPageData.Testimonials} />

      <Gallery data={landingPageData.Gallery} />

      <Contact data={landingPageData.Contact} />
    </div>
  );
};

export default App;
