import { useState } from "react";
import Button from "../components/Button";
import { InputBox } from "../components/InputBox"
import {useNavigate} from 'react-router-dom';
import GoogleButton from "../components/GoogleButton";
const Signup = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    return <div className="bg-slate-300 h-screen flex justify-center">
    <div className="flex flex-col justify-center">
      <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4 justify-center pb-4 pt-4">
       <div className="flex justify-center items-center">
            <img src={'/src/assets/logo.svg'} alt="" height={"75px"} width={"75px"} />
       </div>
        <h1 className="font-bold font-mono text-2xl mt-3">Welcome to CoCoderz</h1>
        <hr className="w-48 h-1 mx-auto bg-gray-300 border-0 rounded my-6 dark:bg-gray-800" />
        {/* <p>Signup to step into the world of Competitive Programming</p> */}
        <GoogleButton text={"Sign Up with Google"} onclick={()=>{
          window.location.href = 'http://localhost:3000/auth/google';
        }}/>
        <div className="relative mt-8 mb-3 flex h-px place-items-center bg-gray-200">
          <div className="absolute left-1/2 h-6 -translate-x-1/2 bg-white px-4 text-center text-sm text-gray-500">Or</div>
        </div>
      <InputBox onchange={(e)=>{    
          setUsername(e.target.value);
        }} placeholder="pritish@gmail.com" text={"Email"} />
        <InputBox onchange={(e)=>{
          setPassword(e.target.value);
        }} placeholder="pritish@gmail.com" text={"Password"} />
        <Button text={"Sign Up"} onclick={()=>{}}/>
      </div>
    </div>
    
</div>
}

export default Signup

