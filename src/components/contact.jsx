import {useState} from "react";
import emailjs from "emailjs-com";
import React from "react";
import {InteractiveMap} from "./Map";
import 'bootstrap-icons/font/bootstrap-icons.css';
import {Modal} from "./Modal";
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
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalStatus, setModalStatus] = useState(''); // 'success' or 'error'
    const [modalMessage, setModalMessage] = useState('');
    const handleChange = (e) => {
        const {name, value} = e.target;
        setState((prevState) => ({...prevState, [name]: value}));
    };
    const clearState = () => setState({...initialState});

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(name, email, message);

        emailjs
            .sendForm("service_f0kli9k", "template_uk34rmq", e.target, "rlfjpugbTrN7kqIwc")
            .then(
                (result) => {
                    console.log(result.text);
                    setModalStatus('success');
                    setModalMessage('Ваше сообщение успешно отправлено! Мы свяжемся с вами в ближайшее время.');
                    setIsModalOpen(true);
                    clearState();
                },
                (error) => {
                    setModalStatus('error');
                    setModalMessage('Произошла ошибка при отправке сообщения. Пожалуйста, попробуйте еще раз или свяжитесь с нами другим способом.');
                    setIsModalOpen(true);
                    console.log(error.text);
                }
            );
    };
    const closeModal = () => {
        setIsModalOpen(false);
    };
    return (
        <div>
            <div id="contact">
                <div className="container">
                    <div className="col-md-8">
                        <div className="row">
                            <div className="map-container">
                                <InteractiveMap />
                            </div>

                            <div className="section-title">
                                <h2>Обратная связь</h2>
                                <p>
                                    Пожалуйста, заполните форму ниже, чтобы отправить нам электронное письмо, и мы
                                    свяжемся с вами как можно скорее.
                                </p>
                            </div>
                            <form name="sentMessage" onSubmit={handleSubmit}>
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
                            <Modal
                                isOpen={isModalOpen}
                                onClose={closeModal}
                                status={modalStatus}
                                message={modalMessage}
                            />
                        </div>
                    </div>
                    <div className="col-md-3 col-md-offset-1 contact-info">
                        <div className="contact-item">
                            <h3>Контактная информация</h3>
                            <div>
                                <span>
                                    <i className="fa fa-map-marker"></i> Юридический адрес
                                </span>
                                <p>{props.data ? props.data.address : "loading"}</p>
                            </div>
                            <span> Юридическая инофрмация</span>
                            <p className={'pcontact'}>
                                УНП 591 528 081
                            </p>
                            <hr/>
                        </div>
                        <div className="contact-item">
                            <div>
                                <span>
                                    <i className="fa fa-phone"></i> Телефон
                                </span>
                                <div>
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
                                            <p>
                                                <a
                                                    href={`tel:${formatPhoneNumber(props.data.phone[0].third)}`}
                                                    style={{textDecoration: 'none', color: 'inherit'}}
                                                    className="phone-link"
                                                >
                                                    {props.data.phone[0].third}
                                                </a>
                                            </p>
                                        </>
                                    ) : (
                                        <span>loading</span>
                                    )}
                                </div>
                            </div>
                        </div>
                        <div className="contact-item">
                            <div>
                                <span>
                                    <i className="fa fa-envelope-o"></i> Email
                                </span>
                                <div>
                                    {props.data ? props.data.email.map(item =>
                                        <p key={item}>{item}</p>
                                    ) : "loading"}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="row">
                            <div className="social">
                                <ul>
                                    <li>
                                        <a target="_blank"  href={props.data ? props.data.telegramm : "/"}>
                                            <i className="fa bi-telegram"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a target="_blank"  href={props.data ? props.data.whatsup : "/"}>
                                            <i className="fa bi-whatsapp"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a target="_blank"  href={props.data ? props.data.viber : "/"}>
                                            <i className="fa bi-chat-dots-fill"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};