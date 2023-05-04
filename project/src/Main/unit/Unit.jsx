import unit from './unit.jpg';
import './Unit.css';

const Unit = () => {
    return (
        <div className='card'>
            <img className='card__img' src={unit} alt='Многостраничный сайт' />
            <h3 className='card__title'>Адаптивный лендинг</h3>
            <p>Верстка многостраничного сайта.</p>
        </div>
    );
};

export default Unit;
