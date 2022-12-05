import AppLogo from '../app-logo/AppLogo';
import ParticlesBackground from '../particles-bacground/ParticlesBackground';
import Calculator from '../calculator/Calculator';

import './App.scss';

const App = () => {

  return (
    <div className="container">
      <ParticlesBackground />
      <AppLogo />
      <Calculator />
    </div>
  );
}

export default App;
