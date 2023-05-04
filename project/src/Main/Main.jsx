import Forest from './forest/Forest';
import Portfolio from './portfolio/Portfolio';
import Quantum from './quantum/Quantum';
import Unit from './unit/Unit';
import './Main.css';

const Main = () => {
    return (
        <main className='portfolio'>
            <div className='container'>
                <h2 className='portfolio__header'>Portfolio</h2>
                <div className='container__card'>
                    <Forest />
                    <Unit />
                    <Portfolio />
                    <Quantum />
                </div>
            </div>
        </main>
    );
};

export default Main;
