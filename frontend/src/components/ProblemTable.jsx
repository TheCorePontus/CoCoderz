// import { problems } from "../mockproblems/problems"
// const ProblemTable = () => {
//     return (
//       <tbody className="text-black">
//         {problems.map((doc, idx) => {
//             const difficultyColor = doc.difficulty === "Easy" ? "text-green-500" : doc.difficulty === "Medium" ? "text-yellow-500" : "text-red-500"
//           return (
//             <tr className={`${idx % 2 === 1 ? "bg-gray-300 rounded-lg border border-gray-200" : "rounded-lg "}`} key={doc.id}>
//               <td className="px-6 py-4 ">
//                 <a href={`/problems/${doc.id}`} className="hover:text-blue-600 cursor-pointer">
//                     {doc.title}
//                 </a>
//               </td>
//               <td className={`px-6 py-4  ${difficultyColor}`}>
//                 {doc.difficulty}
//               </td>
//               <td className='px-6 py-4  font-serif text-slate-500'>
//                 {doc.category}
//               </td>
//               <td className="px-6 py-4 ">
//                 <a href={`/problems/${doc.id}`} className="hover:text-blue-600 cursor-pointer">
//                     Click here
//                 </a>
//               </td>
//             </tr>
//           );
//         })}
//       </tbody>
//     );
//   };
  
//   export default ProblemTable;

import { problems } from "../mockproblems/problems"

const ProblemTable = () => {
    return (
      <tbody className="text-black">
        {problems.map((doc, idx) => {
            const difficultyColor = doc.difficulty === "Easy" ? "text-green-500" : doc.difficulty === "Medium" ? "text-yellow-500" : "text-red-500"
          return (
            <tr className={`${idx % 2 === 1 ? "bg-gray-300" : "bg-white"} rounded-lg shadow-sm `} key={doc.id}>
              <td className="px-6 py-4 first:rounded-l-lg">
                <a href={`/problems/${doc.id}`} className="hover:text-blue-600 cursor-pointer">
                    {doc.title}
                </a>
              </td>
              <td className={`px-6 py-4 ${difficultyColor}`}>
                {doc.difficulty}
              </td>
              <td className='px-6 py-4 font-serif text-slate-500'>
                {doc.category}
              </td>
              <td className="px-6 py-4 last:rounded-r-lg">
                <a href={`https://leetcode.com/problems/two-sum/solutions/968493/javascript/`} className="hover:text-blue-600 cursor-pointer">
                    Click here
                </a>
              </td>
            </tr>
          );
        })}
      </tbody>
    );
  };
  
export default ProblemTable;