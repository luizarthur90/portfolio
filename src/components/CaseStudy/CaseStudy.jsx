import CustomButton from '../Button/CustomButton';
import './CaseStudy.css';
import Tag from '../tag/tag';


// eslint-disable-next-line react/prop-types
function CaseStudy({ Name, Description, ImgSource, label, Link, ImgLink }) {
    return (
        <div className='global-CaseStudy'>
            <div className='h4-CaseStudy'>
                <Tag nomeTag={label} />
                <div>
                    <h4 className='h4-title-caseStudies'>
                        {Name}
                    </h4>
                    <div className='h4-description-caseStudies'>
                        {Description}
                    </div>
                </div>
                <CustomButton ButtonColor='primary' ButtonText='View Project' showWhatsAppIcon={false} link={Link} />
            </div>
            <div className='container-casestudy'>
                <a href={ImgLink}>
                    <img className="img-casestudy" src={ImgSource} alt="casestudy" />
                </a>
            </div>
        </div>

    )
}

export default CaseStudy;