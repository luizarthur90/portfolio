import CustomButton from '../Button/CustomButton';
import './CaseStudy.css';
import Tag from '../tag/tag';


// eslint-disable-next-line react/prop-types
function CaseStudy({ Name, Description, ImgSource, label, Link }) {
    return (
        <div className='global-CaseStudy'>
            <div className='h5-CaseStudy'>
                <Tag nomeTag={label} />
                <div>
                    <h5 className='h5-title-caseStudies'>
                        {Name}
                    </h5>
                    <div className='h5-description-caseStudies'>
                        {Description}
                    </div>
                </div>
                <CustomButton ButtonColor='primary' ButtonText='View Project' showWhatsAppIcon={false} link={Link} />
            </div>
            <div>
                <img className="casestudy-img" src={ImgSource} alt="casestudy" />
            </div>
        </div>

    )
}

export default CaseStudy;