import './App.css';
import {Route, Routes} from 'react-router-dom'
import Navbar from './components/NavBar';
import Home from './components/Home';
import RoomList from './components/RoomList';
import RoomDetails from './components/RoomDetails';
import Login from './components/Login';
import ReservationForm from './components/ReservationForm';

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
        path="/login"
        element={<Login/>}
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

      <Route
        path="/rooms/:id"
        element={
          <>
            <Navbar />
            <RoomDetails/>
          </>
        }
      />

      
      <Route
        path="/reservation/:id"
        element={
          <>
          <Navbar />
          <ReservationForm/>
        </>
        }
      />

    </Routes>
  );
}

export default App;
