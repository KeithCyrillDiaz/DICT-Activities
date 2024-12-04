import './App.css';
import {Route, Routes} from 'react-router-dom'
import Navbar from './components/NavBar';
import Home from './components/Home';
import RoomList from './components/RoomList';

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Navbar />
            <Home />
          </>
        }
      />

      <Route
        path="/rooms"
        element={
          <>
            <Navbar />
            <RoomList/>
          </>
        }
      />
    </Routes>
  );
}

export default App;
