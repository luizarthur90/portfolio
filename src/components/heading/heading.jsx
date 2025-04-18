import './heading.css';
import ProfileImg from '/public/Profile.svg'

function Heading() {
    return (
        <div className="heading-container" id='home'>
            <div className="heading-text">
                <h1>Hi! I&apos;m Luiz Arthur, senior product designer based in Florianópolis, Brazil.</h1>
                <h4 className='h4-heading'>
                    I&apos;m passionate about creating intuitive and delightful user experiences.
                </h4>
            </div>
            <div>
                <img className="profile-img" src={ProfileImg} alt="Profile" />
            </div>
        </div >
    );
}

export default Heading;
