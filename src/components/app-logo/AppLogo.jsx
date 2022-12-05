import Logo from './TexasInstruments-Logo.svg';

import './appLogo.scss';

const AppLogo = () => {
    return (
        <header className="header">
            <img src={Logo} alt="" />
        </header>
    );
}

export default AppLogo;