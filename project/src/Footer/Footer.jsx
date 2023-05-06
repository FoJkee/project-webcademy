import './Footer.css';
import Button from './button/Button';
import facebook from './img/facebook.svg';
import github from './img/github.svg';
import instagram from './img/instagram.svg';
import linkedin from './img/linkedin.svg';
import vk from './img/vk.svg';

const Footer = () => {
    return (
        <div className='footer'>
            <div className='container'>
                <div className='footer__row'>
                    <div className='footer__copirigth'>
                        <div className='footer__copirigth_name'>
                            © Юрий Ключевский
                        </div>
                        <p>HTML верстка и разработка сайтов</p>
                    </div>
                    <div className='footer__profile '>
                        <p>Мои профили в социальных сетях:</p>
                        <div className='footer__icons'>
                            <a href='#'>
                                <img src={instagram} alt='instagram' />
                            </a>
                            <a href='#'>
                                <img src={facebook} alt='facebook' />
                            </a>
                            <a href='#'>
                                <img src={vk} alt='vk' />
                            </a>
                            <a href='#'>
                                <img src={linkedin} alt='linkedin' />
                            </a>
                            <a href='#'>
                                <img src={github} alt='github' />
                            </a>
                        </div>
                    </div>
                    <div className='footer_click footer__col'>
                        <Button />
                        <p>
                            Напишите мне, чтобы заказать или узнать стоимость
                            верстки вашего проекта
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
