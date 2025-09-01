import React from "react";

export const Services = (props) => {
  return (
    <div id="services" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Осуществляем доставку во все регионы Беларуси</h2>

        </div>
        <div className="row">
         {/* {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className="col-md-4">
                  {" "}
                  <i className={d.icon}></i>
                  <div className="service-desc">

                    <p>{d.text}</p>
                  </div>
                </div>
              ))
            : "loading"}*/}


        </div>
          <div className={'delivery-service'}>

              <img src={'img/MAP.png'} alt={'map of delivering'}/>
          </div>
      </div>

    </div>
  );
};
