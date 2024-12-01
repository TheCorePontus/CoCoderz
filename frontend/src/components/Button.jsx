const Button = ({text, onclick}) => {
  return (
    <div className="pt-4">
        <button onClick={onclick} className={`bg-black text-white w-full font-mono pt-1 pb-2 pl-3 pr-3 rounded-lg hover:bg-white border-y-blue-300 hover:border-y-blue-300 hover:text-black hover:border-slate-300 border-solid border-2 border-x-red-300 hover:border-x-red-300 hover:border-solid hover:border-3`}>{text}</button>
      </div>
  )

  

}

export default Button