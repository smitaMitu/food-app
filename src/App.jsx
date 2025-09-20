
import { BrowserRouter,Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Success from "./pages/Success"
import NotFoound from "./pages/NotFoound"
function App() {

  return (
    <>
      <BrowserRouter basename="/food-app">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/success" element={<Success/>}/>
          <Route path="/*" element={<NotFoound/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
