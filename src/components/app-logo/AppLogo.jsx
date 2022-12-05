import './appLogo.scss';
import Logo from './TexasInstruments-Logo.svg';

const AppLogo = () => {
    return (
        <header className="header">
            <img src={Logo} alt="" />
        </header>
    );
}

export default AppLogo;