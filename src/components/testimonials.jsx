import React from "react";

export const Testimonials = (props) => {
  return (
    <div id="testimonials">
      <div className="container">
          <div className="section-title text-center">


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
                          <li>ТУ BY 591528081.001-2021</li>
                      </ul>

                      <li>Вся продукция соответствует:
                          <ul className="inner-list">
                              <li>ТР ТС 004/2011 "О безопасности низковольтного оборудования"</li>
                              <li>ТР ТС 020/2011 "Электромагнитная совместимость технических средств"</li>
                              <li>ГОСТ 12.2.007.0-75</li>
                              <li>СТБ МЭК 60439-1-2007</li>
                          </ul>
                      </li>
                  </ol>
              </div>
          </div>

          <div className="testimonials-grid">
              {props.data
                  ? props.data.map((d, i) => (
                      <div key={`${d.name}-${i}`} className="testimonial-card">
                          <div className="testimonial-image">
                              <img src={d.img} alt={d.text} />
                          </div>
                          <div className="testimonial-content">
                              <p>{d.text}</p>

                          </div>
                      </div>
                  ))
                  : "loading"}
          </div>

      </div>
    </div>
  );
};
