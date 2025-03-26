import CaseStudy from '../CaseStudy/CaseStudy';
import './Section2.css';

function Section2() {


    return (
        <div id='case-studies' className='global-Section2'>
            <div className="case-studies-header">
                <div className="divider">
                    <div className='h3'>
                        <h3 className='title-caseStudies'>
                            Projects
                        </h3>
                        <div className='subtitle-caseStudies'>
                            I bring over 5 years of experience in challenging digital product environments.
                            With a degree in Business Administration, specialization in Interaction Design and an MBA in Strategic UX Management,
                            I have developed a solid foundation to understand both the business and user aspects of product development.
                        </div>
                    </div>
                </div>
            </div>
            <div className='cs-body'>
                <CaseStudy
                    Name={'The protagonist skateboarder and the most engaged teacher'}
                    Description={'Gamified training and monitoring platform for skateboarders and teachers'}
                    ImgSource={'src/assets/Cover_SK.jpg'}
                    label={'Edtech'}
                    Link={"https://luizarthur.notion.site/Gamified-training-and-monitoring-platform-for-skateboarders-and-teachers-1bc78a6c271e8081bf7dc51c8a837674"}
                    ImgLink={"https://luizarthur.notion.site/Gamified-training-and-monitoring-platform-for-skateboarders-and-teachers-1bc78a6c271e8081bf7dc51c8a837674"} />
                <CaseStudy
                    Name={'Optimized Work Schedule Management'}
                    Description={'Restructuring of App Rostering flow and screens'}
                    ImgSource={'src/assets/Cover_Rostering.jpg'}
                    label={'HRtech'}
                    Link={'https://luizarthur.notion.site/Como-melhoramos-a-jornada-do-gestor-de-times-e-nosso-processo-de-recrutamento-6bc6058354944959a191c1567133c13c'}
                    ImgLink={'https://luizarthur.notion.site/Como-melhoramos-a-jornada-do-gestor-de-times-e-nosso-processo-de-recrutamento-6bc6058354944959a191c1567133c13c'} />
                <CaseStudy
                    Name={'A new Telemedicine experience'}
                    Description={'Rethinking patient flow in a telemedicine app'}
                    ImgSource={'src/assets/Cover_Clic.png'}
                    label={'Healthtech'}
                    Link={'https://luizarthur.notion.site/New-Experience-of-a-Telemedicine-Service-1dc11eb5594e4a70aa5041b2d2b2fd2a'}
                    ImgLink={'https://luizarthur.notion.site/New-Experience-of-a-Telemedicine-Service-1dc11eb5594e4a70aa5041b2d2b2fd2a'} />
                <CaseStudy
                    Name={'Key value deliveries of health apps'}
                    Description={'An UX Research of a Pyscotherapy App'}
                    ImgSource={'src/assets/Cover_Vittude.svg'}
                    label={'Healthtech'}
                    Link={'https://drive.google.com/file/d/1ZgZbz9ZhbNz12XeqOtv5jwl-X-Pm_urc/view?usp=drive_link'}
                    ImgLink={'https://drive.google.com/file/d/1ZgZbz9ZhbNz12XeqOtv5jwl-X-Pm_urc/view?usp=drive_link'} />
            </div>
        </div>

    );
}

export default Section2;