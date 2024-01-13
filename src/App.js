import './App.scss';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './component/Router/Router';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </div>
  );
}

export default App;
