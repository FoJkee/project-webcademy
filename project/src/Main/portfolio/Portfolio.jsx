import portfolio from './portfolio.jpg';
import './Portfolio.css';
const Portfolio = () => {
    return (
        <div className='card'>
            <img
                className='card__img'
                src={portfolio}
                alt='Многостраничный сайт'
            />
            <h3 className='card__title'>Личный сайт</h3>
            <p>Верстка многостраничного сайта.</p>
        </div>
    );
};

export default Portfolio;
