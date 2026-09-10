
import logo from "../assets/logo-text.png"

const Nav = () => {
    return (
        <div className="border-b border-b-gray-300 py-4">
            <nav className='flex justify-between container mx-auto mt-5 '>
               <img src={logo} alt="" /> 

               <ul className='flex gap-6'>
                <li className='text-[#DB2777]'>Home</li>
                <li>Technologies</li>
                <li>Projects</li>
                <li>About</li>
                <li>Contact</li>
               </ul>
              
               <div className='flex items-center gap-4'>
                 <p>Sign In</p>
                <button className='bg-[#DB2777] px-6 py-2 rounded-2xl text-amber-50' >Sign Up</button>
               </div>
               
            </nav>
        </div>
    );
};

export default Nav;