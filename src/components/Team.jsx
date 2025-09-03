import React from "react";

export const Team = (props) => {
    return (
        <div id="team" className="text-center">
            <div className="container">
                <div className="col-md-8 col-md-offset-2 section-title team-descr">
                    <p>

                        За время работы компания наработала
                        значительный опыт в сфере электрооборудования,
                        и в настоящее время наше оборудование
                        эффективно применяется на таких предприятиях,
                        как:
                    </p>
                </div>

            </div>
            <div id="clients-row">
                {props.data
                    ? props.data.map((d, i) => (
                        <div key={`${d.name}-${i}`} className="col-md-3 col-sm-6 team">
                            <div className="thumbnail">

                                <img src={d.img} alt={d.name} className="team-img"/>
                            </div>
                        </div>
                    ))
                    : "loading"}
            </div>
        </div>
    );
};
