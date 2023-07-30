import logo from './logo.svg';
import './App.css';
import NavigationMenu from './components/Navigation';
import Header from './components/Header';
import MainContent from './components/MainContent';

function App() {
  return (
    <div className="container py-3">
      <NavigationMenu />
      <Header />
      <MainContent />
    </div>
  );
}

export default App;
