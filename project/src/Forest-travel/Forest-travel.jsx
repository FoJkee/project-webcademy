import Button__travel from './button/Button';
import forestBg from './forestBg.jpg';
import './Forest-travel.css';
import Footer from '../Footer/Footer';

const Forest__travel = () => {
    return (
        <div className='project'>
            <div className='container'>
                <h1 className='project__title'>
                    Верстка сайта «Форест-тревел»
                </h1>
                <div className='project__img'>
                    <img src={forestBg} alt='forest-travel' />
                </div>
                <div className='project__text'>
                    <p>
                        Верстка многостраничного сайта. Главная, страница с
                        услугами, карта проезда с формой обратной связи,
                        страница со статьей.
                    </p>
                    <p>
                        Адрес сайта:<a href='#'>site.com</a>
                    </p>
                </div>
                <div className='button'>
                    <Button__travel />
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Forest__travel;
