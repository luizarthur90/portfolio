import './backgroundVideo.css'

function backgroundVideo() {
    return (
        <div className="caixa-video">
            <video src='src/assets/videoplayback.mp4' loop muted autoPlay></video>
            <div className="mascara"></div>
        </div>
    )
};

export default backgroundVideo;

