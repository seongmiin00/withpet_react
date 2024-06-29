import './styles/App.css';
import NavBar from './components/navbar/NavBar'
import Router from './Router';
import Footer from './components/footer/Footer';

function App() {
  return (
      <>
          <NavBar />
          <div style={{marginTop : '100px'}}></div>
          <Router/>
          <Footer/>
      </>
  );
}

export default App;
