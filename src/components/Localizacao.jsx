import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import "../components/Localizacao.css"

function Localizacao() {
    return (
        <div id='localizacao-empresa'>
            <div className="maps">
                <div className="info">
                    <h2>
                        Nossa localização <FontAwesomeIcon icon={faMapMarkerAlt} />
                    </h2>
                    {/* <h2 className="name-empresa">Marcenaria Pai&Filho</h2> 
                    <h2 className="name-empresa">Movéis projetados</h2> */}
                </div>
                <div className="maps-google">
                    <iframe className="origin" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.3360149517707!2d-37.505289126178944!3d-6.350523862126997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7a5450dcd6bb763%3A0x63c48cb0f6e1976a!2sMarcenaria%20Pai%20%26%20Filho%20M%C3%B3veis%20Projetados!5e0!3m2!1spt-BR!2sbr!4v1694798728131!5m2!1spt-BR!2sbr" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Mapa da localização da empresa">
                    </iframe>
                </div>
            </div>
        </div>
    );
}

export default Localizacao;