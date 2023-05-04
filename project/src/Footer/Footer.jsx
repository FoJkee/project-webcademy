import './Footer.css';
import Button from './button/Button';

const Footer = () => {
    return (
        <div className='footer'>
            <div className='container'>
                <div className='footer-row'>
                    <div className='footer__copirigth'>
                        © Юрий Ключевский HTML верстка и разработка сайтов
                    </div>
                    <div className='footer__profile'>
                        Мои профили в социальных сетях:
                    </div>
                    <Button />
                </div>
            </div>
        </div>
    );
};

export default Footer;
