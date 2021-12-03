import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";

// Import Navbar component from navigation
import Navbar from './components/navigation';
// Import Header component from header
import Header from './components/header';

function App() {
  return (
    <> 
      <Navbar />
      <Header />
    </>    
  );
}

export default App;
