import './App.css'; //uygulamanın stilinin css kısmından import edildiğini belirtir
import Dashboard from './layouts/Dashboard';
import 'semantic-ui-css/semantic.min.css'
import { Container } from 'semantic-ui-react';
import Navi from './layouts/Navi';

function App() {
  return (              //react jsx
    <div className="App">
      <Navi/>
      <Container className="main">
        <Dashboard />
      </Container>

    </div>
  );
}

export default App;
