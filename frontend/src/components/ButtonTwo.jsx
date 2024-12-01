const ButtonTwo = ({text, onclick}) => {
    return (
      <div className="pt-4">
          <button onClick={onclick} className={`bg-white text-black w-full hover:border-x-red-300 hover:border-y-blue-300 font-mono pt-1 pb-2 pl-3 pr-3 rounded-lg hover:bg-black border-x-red-300 border-y-blue-300 hover:text-white border-slate-400 border-2 border-solid hover:border-3`}>{text}</button>
        </div>
    )
  
    
  
  }
  
  export default ButtonTwo