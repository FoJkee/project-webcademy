import quantum from './quantum.jpg';
import './Quantum.css';

const Quantum = () => {
    return (
        <div className='card'>
            <img
                className='card__img'
                src={quantum}
                alt='Многостраничный сайт'
            />
            <h3 className='card__title'>Интернет магазин</h3>
            <p>Верстка многостраничного сайта.</p>
        </div>
    );
};

export default Quantum;
