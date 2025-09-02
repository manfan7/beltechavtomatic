import React from "react";

export const Services = () => {
    return (
        <div id="services" className="text-center">
            <div className="container">
                <div className="section-title">
                    <h2>Мы </h2>
                    <div className={'services_title__container'}>
                        <p className={'services_title'}> осуществляем изготовление:</p>
                    </div>

                    <div className="numbered-block">
                        <ol className="numbered-list">
                                <ul className="inner-list">
                                    <li>систем автоматизации котельных станций</li>
                                    <li>систем управления для насосных станций</li>
                                    <li>систем автоматизации систем водоснабжения и водоотведения </li>
                                    <li>систем диспетчеризации</li>
                                </ul>

                        </ol>
                    </div>
                </div>



            </div>

        </div>
    );
};
