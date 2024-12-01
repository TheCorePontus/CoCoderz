import { useNavigate } from "react-router";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';

const NavBar = () => {
    const navigate = useNavigate();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleLogout = async () => {
        try {
            const response = await fetch('http://localhost:3000/logout', {
                method: 'GET',
                credentials: 'include',
            });

            if (response.ok) {
                localStorage.removeItem('user');
                toast.success("Logged out successfully", {position: "top-right", autoClose: 3000})
                navigate('/signup');
            } else {
                console.error('Logout failed');
            }
        } catch (error) {
            console.error('Error during logout:', error);
        }
    };

    return (
        <nav className="fixed z-50 top-0 bg-slate-950 text-zinc-300 w-full">
            <div className="h-14 flex justify-between items-center px-4 lg:px-6">
                
                <div onClick={() => navigate('/')} className="cursor-pointer">
                    <div className="flex font-serif text-white">
                        &lt;/&gt; &nbsp; CoCoderz
                    </div>
                </div>

                <div className="hidden md:flex justify-around space-x-8">
                    <div onClick={() => navigate('/contests')} className="cursor-pointer hover:text-white">
                        Contests
                    </div>
                    <div onClick={() => navigate('/problems')} className="cursor-pointer hover:text-white">
                        Problems
                    </div>
                    <div onClick={() => navigate('/leaderboard')} className="cursor-pointer hover:text-white">
                        Leaderboard
                    </div>
                </div>

                <div className="hidden md:block">
                    <button onClick={handleLogout} className="px-4 py-2 hover:text-white rounded">
                        Logout
                    </button>
                </div>

                <button 
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="md:hidden p-2"
                >
                    <svg 
                        className="w-6 h-6" 
                        fill="none" 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth="2" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                    >
                        {isMenuOpen ? (
                            <path d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path d="M4 6h16M4 12h16M4 18h16" />
                        )}
                    </svg>
                </button>
            </div>

            {isMenuOpen && (
                <div className="md:hidden bg-slate-900 py-2">
                    <div className="flex flex-col space-y-3 px-4">
                        <div 
                            onClick={() => {
                                navigate('/contests');
                                setIsMenuOpen(false);
                            }} 
                            className="cursor-pointer hover:text-white py-2"
                        >
                            Contests
                        </div>
                        <div 
                            onClick={() => {
                                navigate('/problems');
                                setIsMenuOpen(false);
                            }} 
                            className="cursor-pointer hover:text-white py-2"
                        >
                            Problems
                        </div>
                        <div 
                            onClick={() => {
                                navigate('/leaderboard');
                                setIsMenuOpen(false);
                            }} 
                            className="cursor-pointer hover:text-white py-2"
                        >
                            Leaderboard
                        </div>
                        <div 
                            onClick={() => {
                                handleLogout();
                                setIsMenuOpen(false);
                            }} 
                            className="cursor-pointer hover:text-white py-2"
                        >
                            Logout
                        </div>
                    </div>
                </div>
            )}
            <ToastContainer />
        </nav>
    );
}

export default NavBar;