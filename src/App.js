import logo from './logo.svg';
import './App.css';
import NavigationMenu from './components/navigation/Navigation';
import Header from './components/header/Header';
import MainContent from './components/mainContent/MainContent';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="container py-3">
      <NavigationMenu />
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;
