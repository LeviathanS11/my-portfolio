

const Button = ({children}) => {
    
    return (
        <button className="border-2  px-2 ml-3 rounded "> 
            {children}
        </button>
    );
};

export default Button;