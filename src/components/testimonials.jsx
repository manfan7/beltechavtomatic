import React from "react";

export const Testimonials = (props) => {
  return (
    <div id="testimonials">
      <div className="container">
          <div className="section-title text-center">
              <h2>Оборудование нашего производства установлено на государственных объектах, а также частных
                  компаний</h2>
              <div className="numbered-block">
                  <ol className="numbered-list">
                      <li>В стенах нашей компании каждое изделие проходит постоянный контроль качества:
                          <ul className="inner-list">
                              <li>Проверяется исправность изоляции и каждого отдельного компонента</li>
                              <li>Корректность сборки комплектующих</li>
                              <li>Работоспособность изделия в целом </li>
                          </ul>
                      </li>
                      <li>Сборка электротехнических устройств осуществляется по нормам действующих технических условий
                      </li>
                      <ul className="inner-list">
                          <li>Ту Ву 591528081.001-2081</li>
                      </ul>

                      <li>Вся продукция соответствует:
                          <ul className="inner-list">
                              <li>ТРТС 004/2011 "О безопасности низковольтного оборудования"</li>
                              <li>ТРТС 020/2011 "Электромагнитная совместимость технических средств"</li>
                              <li>ГОСТ 12.2.007.0-75</li>
                              <li>СТБ МЭК 60439-1-2007</li>
                          </ul>
                      </li>
                  </ol>
              </div>
          </div>
          <div className="row">
              {props.data
                  ? props.data.map((d, i) => (
                      <div key={`${d.name}-${i}`} className="col-md-4">
                          <div className="testimonial">
                              <div className="testimonial-image">
                                  {" "}
                                  <img src={d.img} alt=""/>{" "}
                              </div>
                              <div className="testimonial-content">
                                  <p>{d.text}</p>

                              </div>
                          </div>
                      </div>
                  ))
                  : "loading"}
          </div>
      </div>
    </div>
  );
};
