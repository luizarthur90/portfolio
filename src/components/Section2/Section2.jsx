import CaseStudy from '../CaseStudy/CaseStudy';
import './Section2.css';

function Section2() {
    return (
        <div id='case-studies' className='global-Section2'>
            <div>
                <h4 className='h4-title-caseStudies'>
                    Case Studies
                </h4>
                <div className='h4-subtitle-caseStudies'>
                    Solving user & business problems since last 15+ years. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </div>
            </div>
            <div className='cs-body'>
                <CaseStudy CaseStudyName={'Plataforma Gamificada para Skatistas e Professores de Skate'} CaseStudyDescription={'Gamified training and monitoring platform for skateboarders and teachers'} ImgSource={'src/assets/casestudy1.svg'} />
                <CaseStudy CaseStudyName={'Gestão de Escalas de Trabalhos otimizadas'} CaseStudyDescription={'Reestruturação de fluxo e telas do App Rostering'} ImgSource={'src/assets/cover_rostering.svg'} />
                <CaseStudy CaseStudyName={'Uma nova experiência de Telemedicina'} CaseStudyDescription={'Repensando o fluxo dos pacientes em um app de telemedicina'} ImgSource={'src/assets/sXIPxSCn9xNEBaG1.png'} />
            </div>
        </div>

    );
}

export default Section2;