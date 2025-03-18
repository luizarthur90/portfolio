import './heading.css';

function Heading() {
    return (
        <div className="heading-container" id='home'>
            <div className="heading-text">
                <h1>Hi, My name is Luiz Arthur</h1>
                <p>
                    Intro text: Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
            </div>
            <div>
                <img className="profile-img" src="src/assets/profile.svg" alt="Profile" />
            </div>
        </div >
    );
}

export default Heading;
