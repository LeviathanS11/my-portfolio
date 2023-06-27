
import resume from '../assets/My resume.pdf'
const Button = ({children}) => {
    
    return (
        <button className="border-2 border-gray-300 px-2 ml-3 rounded text-gray-600 hover:text-gray-400 duration-500"> 
         <a href={resume} download>{children}</a>
        </button>
    );
};

export default Button;