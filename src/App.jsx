import Footer from "./Components/Footer/Footer"
import Header from "./Components/Header/Header"
import Home from "./pages/Home/Home"
import Trending from "./pages/Trending/Trending"
import Movies from "./pages/Movies/Movies"
import Shows from "./pages/Shows/Shows"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import "./App.css"

function App() {

  return (
    <div className="app">
      <Router>
        <Header/>
        <div className="content">
          <Routes>
            <Route path="/" element={<Trending/>}/>
            {/* <Route path="/trending" element={<Trending/>}/> */}
            <Route path="/movies" element={<Movies/>}/>
            <Route path="/tvshows" element={<Shows/>}/>
          </Routes>
        </div>
        {/* <Footer/> */}
      </Router>
    </div>
  )
}

export default App
