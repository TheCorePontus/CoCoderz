import NavBar from "../components/NavBar"
import ProblemTable from "../components/ProblemTable"

const Problems = () => {
  return (
    <div className="min-h-screen bg-slate-100">
      <NavBar/>
      <div className="pt-24 z-0 px-8 md:px-20 max-w-7xl mx-auto mb-7 pb-7">
        <div className="items-center">
          <div className="space-y-6 p-6 bg-white rounded-2xl hover:shadow-md text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-slate-800 leading-tight">
                <span className=" font-mono text-blue-500">Problemset</span>
            </h1>
            <p className="text-lg text-slate-600">A problem is a chance for you to do your best.</p>
          </div>
          <div className="space-y-6 p-6 mt-3 bg-white rounded-2xl hover:shadow-md">
            <div className="relative overflow-x-auto mx-auto px-6">
              <table className="text-sm text-left text-gray-500 dark:text-gray-400 w-full max-w-[1200px] mx-auto">
                <thead className="text-xs text-gray-700 uppercase border-b dark:text-gray-400">
                  <tr>
                    <th scope="col" className="px-6 py-3 w-0 font-medium">
                      Title
                    </th>
                    <th scope="col" className="px-6 py-3 w-0 font-medium">
                      Difficulty
                    </th>
                    <th scope="col" className="px-6 py-3 w-0 font-medium">
                      Category
                    </th>
                    <th scope="col" className="px-6 py-3 w-0 font-medium">
                      Solution
                    </th>
                  </tr>
                </thead>
                <ProblemTable />
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Problems