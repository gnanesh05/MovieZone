import Header from "./Components/Header/Header"
import Trending from "./pages/Trending/Trending"
import Movies from "./pages/Movies/Movies"
import Shows from "./pages/Shows/Shows"
import Details from "./pages/Details/Details"
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
            <Route path="/movies" element={<Movies/>}/>
            <Route path="/movies/:id" element={<Details mediaType='movie'/>} />
            <Route path="/tvshows" element={<Shows/>}/>
            <Route path="/tvshows/:id" element={<Details mediaType='tv'/>} />

          </Routes>
        </div>
        {/* <Footer/> */}
      </Router>
    </div>
  )
}

export default App
