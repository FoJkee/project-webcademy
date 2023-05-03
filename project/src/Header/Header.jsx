import './Header.css';
import arrow from './arrow.svg';
const Header = () => {
    return (
        <div className='header'>
            <h1 className='header-title'>Viktor Romanovsky</h1>
            <p className='header-subtitle'>junior frontend developer</p>
            <div className='header-arrow'>
                <img src={arrow} alt='arrow' />
            </div>
        </div>
    );
};

export default Header;
