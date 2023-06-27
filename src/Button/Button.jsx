
import resume from '../assets/My resume.pdf'
const Button = ({children}) => {
    
    return (
        <button className="bg-cyan-400 rounded-lg border-2 w-24 h-12 text-center ml-2 text-gray-800 hover:text-gray-400 duration-500 drop-shadow-xl"> 
         <a href={resume} download>{children}</a>
        </button>
    );
};

export default Button;