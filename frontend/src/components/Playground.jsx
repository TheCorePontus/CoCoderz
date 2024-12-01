import { useState } from 'react';
import PrefNav from "./PrefNav";
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { vscodeDark } from '@uiw/codemirror-theme-vscode';
import { toast } from 'react-toastify';

const Playground = () => {
  const [code, setCode] = useState(`function twoSum(nums, target){
    // Write your code here
};`);

  const handleSubmit = () => {
    try {
      const userFunction = new Function(`
        ${code}
        return twoSum;
      `)();
      const nums = [
        [2, 7, 11, 15],
        [3, 2, 4],
        [3, 3],
      ];
      const targets = [9, 6, 6];
      const answers = [
        [0, 1],
        [1, 2],
        [0, 1],
      ];

      for (let i = 0; i < nums.length; i++) {
        const result = userFunction(nums[i], targets[i]);
        if (!Array.isArray(result) || result.length !== 2) {
          throw new Error('Function should return an array of two numbers');
        }
        if (JSON.stringify(result.sort()) !== JSON.stringify(answers[i].sort())) {
          throw new Error(`Test case ${i + 1} failed: Expected ${JSON.stringify(answers[i])} but got ${JSON.stringify(result)}`);
        }
      }

      toast.success('Congratulations! All test cases passed! 🎉', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });

    } catch (error) {
      
      toast.error(error.message || 'Something went wrong! Check your code.', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  return (
    <div className="flex flex-col bg-zinc-800 h-[calc(100vh-94px)]">
      <PrefNav />
      <div className="flex-1 overflow-hidden">
        <CodeMirror
          value={code}
          theme={vscodeDark}
          extensions={[javascript()]}
          onChange={(value) => setCode(value)}
          style={{
            fontSize: 16,
            height: '100%'
          }}
          className="h-full"
        />
      </div>
      <div className="flex justify-end p-2 bg-slate-100">
        <button 
          onClick={handleSubmit}
          className="bg-green-500 hover:bg-green-600 text-white px-5 py-1 rounded-md transition-colors"
        >
          Submit
        </button>
      </div>
    </div>
  )
}

export default Playground;