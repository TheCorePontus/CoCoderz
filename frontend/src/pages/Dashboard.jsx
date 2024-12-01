import { useNavigate } from "react-router"
import Button from "../components/Button"
import ButtonTwo from "../components/ButtonTwo"
import Footer from "../components/Footer"
import NavBar from "../components/NavBar"

const Dashboard = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-slate-100">
      <NavBar/>
      <div className="pt-24 z-0 px-8 md:px-20 max-w-7xl mx-auto mb-7">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Content Section */}
          <div className="space-y-6 p-6 bg-white rounded-2xl shadow-md">
            <h1 className="text-3xl md:text-4xl font-bold text-slate-800 leading-tight">
              Welcome to <span className="text-indigo-600 font-mono">CoCoderz</span>
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed">
              Welcome to the world of Competitive Programming. CoCoderz is a platform for holding programming contests, 
              participate in challenges, solve problems and climb the leaderboard.
            </p>
            <div className="grid md:grid-cols-2 gap-16">
            <Button text={"View Contests"} onclick={()=>navigate('/contests')}/>
            <ButtonTwo text={"Solve Problems"} onclick={()=>navigate('/problems')}/>
            </div>
          </div>

          {/* Image Section */}
          <div className="relative group z-0">
            <div className="overflow-hidden rounded-2xl shadow-lg">
              <img 
                className="w-full h-[400px] object-cover hover:scale-105 transition-transform duration-300" 
                src="/src/assets/icpc.jpeg" 
                alt="ICPC Competition" 
              />
            </div>
            {/* Optional: Add an overlay gradient */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </div>
        </div>
        <div>
            <div className="mt-12">
                <h1 className="text-2xl font-bold">Upcoming Contests</h1>
                <p className="pt-2 text-gray-500 text-lg">Checkout the upcoming contests on CoCoderz</p>
            </div>
            <div className="mt-6 grid md:grid-cols-3 gap-5">
                <div className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                    <h3 className="text-xl font-semibold text-slate-800 mb-3">First Contest</h3>
                    <div className="flex justify-between text-slate-600">
                        <p>Started</p>
                        <p>Duration</p>
                    </div>
                    <div className="flex justify-between text-slate-800 font-bold text-sm mt-1">
                        <p>20 hours ago</p>
                        <p>48 hours</p>
                    </div>
                    <div className="w-32">
                        <Button text={"Participate"}/>
                    </div>
                </div>
                <div className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                    <h3 className="text-xl font-semibold text-slate-800 mb-3">Second Contest</h3>
                    <div className="flex justify-between text-slate-600">
                        <p>Upcoming</p>
                        <p>Duration</p>
                    </div>
                    <div className="flex justify-between text-slate-800 font-bold text-sm mt-1">
                        <p>24 hours from now</p>
                        <p>48 hours</p>
                    </div>
                    <div className="w-32">
                        <Button text={"Participate"}/>
                    </div>
                </div>
                <div className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                    <h3 className="text-xl font-semibold text-slate-800 mb-3">Third Contest</h3>
                    <div className="flex justify-between text-slate-600">
                        <p>Upcoming</p>
                        <p>Duration</p>
                    </div>
                    <div className="flex justify-between text-slate-800 font-bold text-sm mt-1">
                        <p>80 hours from now</p>
                        <p>48 hours</p>
                    </div>
                    <div className="w-32">
                        <Button text={"Participate"}/>
                    </div>
                </div>
            </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Dashboard