import './Main.css';
import forest from './forest.jpg';

const Main = () => {
    return (
        <main className='portfolio'>
            <div className='container'>
                <h2 className='portfolio__header'>Портфолио</h2>
                <div className='card'>
                    <img
                        className='card__img'
                        src={forest}
                        alt='Многостраничный сайт'
                    />
                    <h3 className='card__title'>Многостраничный сайт</h3>
                    <p>Верстка многостраничного сайта.</p>
                </div>
            </div>
        </main>
    );
};

export default Main;
