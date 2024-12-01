import Button from '../components/Button'
import NavBar from '../components/NavBar'

const Contests = () => {
  return (
    <div className='bg-slate-200 min-h-screen'>
      <NavBar />
      <div className="pt-16 z-0 px-3 md:px-6 max-w-7xl mx-auto mb-7 pb-7 ">
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
    </div>
  )
}

export default Contests