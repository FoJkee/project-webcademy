import forest from './forest.jpg';
import './Forest.css';

const Forest = () => {
    return (
        <div className='card'>
            <img
                className='card__img'
                src={forest}
                alt='Многостраничный сайт'
            />
            <h3 className='card__title'>Многостраничный сайт</h3>
            <p>Верстка многостраничного сайта.</p>
        </div>
    );
};

export default Forest;
