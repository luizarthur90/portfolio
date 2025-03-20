import CaseStudy from '../CaseStudy/CaseStudy';
import './Section2.css';

function Section2() {


    return (
        <div id='case-studies' className='global-Section2'>
            <div>
                <h4 className='h4-title-caseStudies'>
                    Projects
                </h4>
                <div className='h4-subtitle-caseStudies'>
                    Solving user & business problems since last 15+ years. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </div>
            </div>
            <div className='cs-body'>
                <CaseStudy
                    Name={'The protagonist skateboarder and the most engaged teacher'}
                    Description={'Gamified training and monitoring platform for skateboarders and teachers'}
                    ImgSource={'src/assets/casestudy1.svg'}
                    label={'Edtech'}
                    Link={"https://luizarthur.notion.site/Gamified-training-and-monitoring-platform-for-skateboarders-and-teachers-1bc78a6c271e8081bf7dc51c8a837674"} />
                <CaseStudy
                    Name={'Optimized Work Schedule Management'}
                    Description={'Restructuring of App Rostering flow and screens'}
                    ImgSource={'src/assets/cover_rostering.svg'}
                    label={'HRtech'}
                    Link={'https://luizarthur.notion.site/Como-melhoramos-a-jornada-do-gestor-de-times-e-nosso-processo-de-recrutamento-6bc6058354944959a191c1567133c13c'} />
                <CaseStudy
                    Name={'A new Telemedicine experience'}
                    Description={'Rethinking patient flow in a telemedicine app'}
                    ImgSource={'src/assets/sXIPxSCn9xNEBaG1.png'}
                    label={'Healthtech'}
                    Link={'https://luizarthur.notion.site/New-Experience-of-a-Telemedicine-Service-1dc11eb5594e4a70aa5041b2d2b2fd2a'} />
            </div>
        </div>

    );
}

export default Section2;