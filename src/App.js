import './App.css';
import { Header, Favorites, Meals, Modal } from './components';


function App() {
  return (
    <main className="App">
      <Header/>
      <Favorites/>
      <Meals/>
      <Modal/>
    </main>
  );
}

export default App;
