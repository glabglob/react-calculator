import AppLogo from '../app-logo/AppLogo';
import ParticlesBackground from '../particles-bacground/ParticlesBackground';
import './App.scss';

const App = () => {

  return (
    <div className="container">
      <ParticlesBackground/>
      <AppLogo/>
    </div>
  );
}

export default App;
