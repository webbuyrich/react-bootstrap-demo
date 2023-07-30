import logo from './logo.svg';
import './App.css';
import NavigationMenu from './components/Navigation';
import Header from './components/Header';

function App() {
  return (
    <div className="container py-3">
      <NavigationMenu />
      <Header />
    </div>
  );
}

export default App;
