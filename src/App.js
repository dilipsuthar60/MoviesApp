import './App.css';
import Banner from './component/Banner';
import Movies from './component/Movies';
import Navbar from './component/Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Favourites from './component/Favourites';
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <Banner />
              <Movies />
            </>
          }>
          </Route>
          <Route path="/fav" element={
            <Favourites />
          }>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
