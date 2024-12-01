import NavBar from "../components/NavBar"
import Workspace from "../components/Workspace"

const Solve = () => {
  return (
    <div className="min-h-screen bg-slate-100">
      <NavBar />
      <div className="pt-16 px-2"><Workspace /></div>
    </div>
  )
}

export default Solve