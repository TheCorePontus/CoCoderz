// const Footer = () => {
//   return (
//     <div className="min-h-80 bg-slate-950 text-white">
//         <div className="text-center pt-10">
//             <div className="text-7xl font-mono">
//                 &lt;CoCoderz /&gt;
//             </div>
//             <div className="mt-7 text-xl">
//                 <h1>&lt; Made with 🥺 by <a href="https://x.com/Hitsugayatt" className=" text-blue-400">@Pritish </a> /&gt;</h1>
//             </div>
//             <div className="mt-5 text-lg">
//                 <h1> 🌟 Shoot me a message on 🌟 </h1>
//             </div>
//         </div>
//         <div className="flex justify-center gap-20 text-md mt-7 ">
//             <div>
//                 <a href="https://www.linkedin.com/in/pritish-jadon-025451250/">『 <span className="text-blue-400">LinkedIn</span> 』</a>
//             </div>
//             <div>
//                 <a href="https://x.com/Hitsugayatt">『 <span className="text-blue-400">Twitter</span> 』</a>
//             </div>
//             <div>
//                 <a href="https://github.com/TheCorePontus/">『 <span className="text-blue-400">GitHub</span> 』</a>
//             </div>
//             <div>
//                 <a href="mailto:pritishjadon25@gmail.com?subject=Hello%20from%20CoCoderz&body=Hi%20there!">『  <span className="text-blue-400">Gmail</span> 』</a>
//             </div>
//             <div>
//                 <a href="#">Discord : 『 <span className="text-blue-400">Hitsugayatt</span>  』</a>
//             </div>
//         </div>
//     </div>
//   )
// }

// export default Footer

const Footer = () => {
    return (
      <div className="min-h-80 bg-slate-950 text-white px-4">
        <div className="text-center pt-10">
          <div className="text-4xl md:text-5xl lg:text-7xl font-mono">
            &lt;CoCoderz /&gt;
          </div>
          <div className="mt-4 md:mt-7 text-base md:text-xl">
            <h1>&lt; Made with 🥺 by <a href="https://x.com/Hitsugayatt" className="text-blue-400">@Pritish </a> /&gt;</h1>
          </div>
          <div className="mt-3 md:mt-5 text-base md:text-lg">
            <h1> 🌟 Shoot me a message on 🌟 </h1>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-center md:gap-8 lg:gap-20 text-sm md:text-md mt-4 md:mt-7 space-y-4 md:space-y-0">
          <div>
            <a href="https://www.linkedin.com/in/pritish-jadon-025451250/" className="hover:opacity-80">『 <span className="text-blue-400">LinkedIn</span> 』</a>
          </div>
          <div>
            <a href="https://x.com/Hitsugayatt" className="hover:opacity-80">『 <span className="text-blue-400">Twitter</span> 』</a>
          </div>
          <div>
            <a href="https://github.com/TheCorePontus/" className="hover:opacity-80">『 <span className="text-blue-400">GitHub</span> 』</a>
          </div>
          <div>
            <a href="mailto:pritishjadon25@gmail.com?subject=Hello%20from%20CoCoderz&body=Hi%20there!" className="hover:opacity-80">『 <span className="text-blue-400">Gmail</span> 』</a>
          </div>
          <div>
            <a href="#" className="hover:opacity-80">Discord : 『 <span className="text-blue-400">Hitsugayatt</span> 』</a>
          </div>
        </div>
      </div>
    )
  }
  
  export default Footer