import { BrowserRouter, Route, Routes } from "react-router-dom"
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Signup from "./pages/Signup"
import Dashboard from "./pages/Dashboard"
import Contests from "./pages/Contests"
import Problems from "./pages/Problems"
import Leaderboard from "./pages/Leaderboard"
import Solve from "./pages/Solve"

function App() {
  return (
    <BrowserRouter>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <Routes>
        <Route path="/signup" element={<Signup/>} />
        <Route path="/" element={<Dashboard />}/>
        <Route path="/contests" element={<Contests />} />
        <Route path="/problems" element={<Problems />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/problems/:id" element={<Solve />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App