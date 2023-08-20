import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbr from './Navbr/Navbr';
import FootD from './FootD/FootD';
import Cartes from './Cartes/Cartes';
function App() {
  return (
    <div className="App">
      <Navbr />

      <Cartes />
      <FootD />
    </div>
  );
}

export default App;
