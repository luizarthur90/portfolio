
import './CaseStudy.css';
import Tag from '../tag/tag';

// eslint-disable-next-line react/prop-types
function CaseStudy({ CaseStudyName, CaseStudyDescription, ImgSource }) {
    return (
        <div className='global-CaseStudy'>
            <div className='h5-CaseStudy'>
                <Tag nomeTag={'Fintech'} />
                <div>
                    <h5 className='h5-title-caseStudies'>
                        {CaseStudyName}
                    </h5>
                    <div className='h5-description-caseStudies'>
                        {CaseStudyDescription}
                    </div>
                </div>
            </div>
            <div>
                <img className="casestudy-img" src={ImgSource} alt="casestudy" />
            </div>
        </div>

    )
}

export default CaseStudy;