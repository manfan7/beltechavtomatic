import React from "react";

export const Navigation = (props) => {
  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            {" "}
            <span className="sr-only">Toggle navigation</span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
          </button>
          <a className="navbar-brand page-scroll" href="#">
            <img src={'img/icon.jpg'} alt={'logo'}/>
           Белтехавтоматик
          </a>
        </div>

        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-right">

            <li>
              <a href="#about" className="page-scroll">
                О Нас
              </a>
            </li>
            <li>
              <a href="#services" className="page-scroll">
               Наши услуги
              </a>
            </li>
            <li>
              <a href="#portfolio" className="page-scroll">
                Галерея
              </a>
            </li>
            <li>
              <a href="#testimonials" className="page-scroll">
               Наше производство
              </a>
            </li>

            <li>
              <a href="#contact" className="page-scroll">
                Контакты
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
