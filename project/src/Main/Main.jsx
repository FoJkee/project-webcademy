import Forest from './forest/Forest';
import Portfolio from './portfolio/Portfolio';
import Quantum from './quantum/Quantum';
import Unit from './unit/Unit';
import './Main.css';
import Forest__travel from '../Forest-travel/Forest-travel';

const Main = () => {
    return (
        <main className='portfolio'>
            <div className='container'>
                <h2 className='portfolio__header'>Portfolio</h2>
                <div className='container__card'>
                    <a href={<Forest__travel />}>
                        <Forest />
                    </a>
                    <Unit />
                    <Portfolio />
                    <Quantum />
                </div>
            </div>
        </main>
    );
};

export default Main;
