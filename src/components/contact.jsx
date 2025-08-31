import {useState} from "react";
import emailjs from "emailjs-com";
import React from "react";

const initialState = {
    name: "",
    email: "",
    message: "",
};
export const Contact = (props) => {
    const formatPhoneNumber = (phone) => {
        return phone.replace(/\D/g, ''); // удаляем все нецифровые символы
    };
    const [{name, email, message}, setState] = useState(initialState);

    const handleChange = (e) => {
        const {name, value} = e.target;
        setState((prevState) => ({...prevState, [name]: value}));
    };
    const clearState = () => setState({...initialState});


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(name, email, message);

        {/* replace below with your own Service ID, Template ID and Public Key from your EmailJS account */
        }

        emailjs
            .sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", e.target, "YOUR_PUBLIC_KEY")
            .then(
                (result) => {
                    console.log(result.text);
                    clearState();
                },
                (error) => {
                    console.log(error.text);
                }
            );
    };
    return (
        <div>
            <div id="contact">
                <div className="container">
                    <div className="col-md-8">
                        <div className="row">
                            <div className="section-title">
                                <h2>Обратная связь</h2>
                                <p>
                                    Пожалуйста, заполните форму ниже, чтобы отправить нам электронное письмо, и мы
                                    свяжемся с вами как можно скорее.
                                </p>
                            </div>
                            <form name="sentMessage" validate onSubmit={handleSubmit}>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                className="form-control"
                                                placeholder="Имя"
                                                required
                                                onChange={handleChange}
                                            />
                                            <p className="help-block text-danger"></p>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                className="form-control"
                                                placeholder="Email"
                                                required
                                                onChange={handleChange}
                                            />
                                            <p className="help-block text-danger"></p>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group">
                  <textarea
                      name="message"
                      id="message"
                      className="form-control"
                      rows="4"
                      placeholder="Сообщение"
                      required
                      onChange={handleChange}
                  ></textarea>
                                    <p className="help-block text-danger"></p>
                                </div>
                                <div id="success"></div>
                                <button type="submit" className="btn btn-custom btn-lg">
                                    Отправить
                                </button>
                            </form>
                        </div>
                    </div>
                    <div className="col-md-3 col-md-offset-1 contact-info">
                        <div className="contact-item">
                            <h3>Контактная информация</h3>
                            <p>
                <span>
                  <i className="fa fa-map-marker"></i> Юридический адресс
                </span>
                                {props.data ? props.data.address : "loading"}
                            </p>
                            <span> Юридическая инофрмация</span>
                            <p className={'pcontact'}>
                                УНП 591 528 081
                            </p>
                            <hr/>
                            <p className={'pcontact'}>
                                IBAN: BY30 ALFA 3012 2679 1600 1027 0000
                                в ЗАО «АЛЬФА-БАНК», г. Минск
                                BIK: ALFABY2X
                            </p>
                            <hr/>
                            <p className={'pcontact'}>
                                BIK: ALFABY2X
                            </p>
                        </div>
                        <div className="contact-item">
                            <p>
                <span>
                  <i className="fa fa-phone"></i> Телефон
                </span>{" "}
                                {props.data ? (
                                    <>
                                        <p>
                                            <a
                                                href={`tel:${formatPhoneNumber(props.data.phone[0].first)}`}
                                                style={{textDecoration: 'none', color: 'inherit'}}
                                                className="phone-link"
                                            >
                                                {props.data.phone[0].first}
                                            </a>
                                        </p>
                                        <p>
                                            <a
                                                href={`tel:${formatPhoneNumber(props.data.phone[0].second)}`}
                                                style={{textDecoration: 'none', color: 'inherit'}}
                                                className="phone-link"
                                            >
                                                {props.data.phone[0].second}
                                            </a>
                                        </p>
                                    </>
                                ) : (
                                    <p>loading</p>
                                )}
                            </p>
                        </div>
                        <div className="contact-item">
                            <p>
                <span>
                  <i className="fa fa-envelope-o"></i> Email
                </span>{" "}
                                {props.data ?  props.data.email.map(item=><p>{item}</p>) : "loading"}
                            </p>
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="row">
                            <div className="social">
                                <ul>
                                    <li>
                                        <a href={props.data ? props.data.facebook : "/"}>
                                            <i className="fa fa-facebook"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href={props.data ? props.data.twitter : "/"}>
                                            <i className="fa fa-twitter"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href={props.data ? props.data.youtube : "/"}>
                                            <i className="fa fa-youtube"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="footer">
                <div className="container text-center">
                    <p>
                        &copy; 2023 Issaaf Kattan React Land Page Template. Design by{" "}
                        <a href="http://www.templatewire.com" rel="nofollow">
                            TemplateWire
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
};
