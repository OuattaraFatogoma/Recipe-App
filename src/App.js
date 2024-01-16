import './App.css';
import { Header, Favorites, Meals, Modal, Recipe } from './components';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <main className="App">
      <Header/>
      <Favorites/>
      <Routes>
        <Route path="/" element={<Meals/>} />
        <Route path="/recipe/:id" element={<Recipe/>} />
      </Routes>
      <Modal/>
    </main>
  );
}

export default App;
