import React from "react";

export const Services = (props) => {
  return (
    <div id="services" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Наши услуги</h2>
          <p>
           Комплектуем и собираем шкафы на любом оборудовании
          </p>
        </div>
        <div className="row">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className="col-md-4">
                  {" "}
                  <i className={d.icon}></i>
                  <div className="service-desc">
                    <h3>{d.name}</h3>
                    <p>{d.text}</p>
                  </div>
                </div>
              ))
            : "loading"}


        </div>
          <div className={'delivery-service'}>
              <p className={'dostavka'}>
                  Осуществляем доставку во все регионы Беларуси
              </p>
              <img src={'../../img/MAP.jpg'} alt={'map of delivering'}/>
          </div>
      </div>

    </div>
  );
};
