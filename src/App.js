import './App.scss';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './component/Router/Router';
import Header from './component/Header/Header';
import Footer from './component/Footer/Footer'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
        <AppRouter />
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
