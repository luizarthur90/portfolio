import './Contact.css';
import CustomButton from '../Button/CustomButton';
import "portfolio/src/assets/1733155586653.jpg"

function Contact() {
    return (
        <div id='contact' className='global-contact'>
            <h4 className='h4-title-contact'>Contact</h4>
            <p className='h4-subtitle-contact'>Feel free to contact me at any time.</p>
            <div>
                <CustomButton ButtonText={'Contact me by Whatsapp!'} showWhatsAppIcon={true} link={'https://wa.me/5548996160564'} />
            </div>
        </div>
    )
}

export default Contact;
