import Button from "../Button/Button";
import image from "../assets/profile.jpg";
import { HiMiniArrowDownTray } from "react-icons/hi2";

const Navbar = () => {
    const Links=[
        {name:"HOME",link:"/"},
        {name:"PROJECTS",link:"/"},
        {name:"ABOUT",link:"/"},
        {name:"CONTACT",link:"/"}
    ]
    return (
        <div className=" flex flex-row items-center justify-between mx-7 py-1">
            <div className="flex items-center">
            <img style={{width:"40px",borderRadius:"100px",height:"40px"}} src={image} alt="" />
            <p className="text-sm pl-2">SHAKIUL ALAM</p>
            </div>
                <ul className="flex items-center cursor-pointer">
                    {
                        Links.map((item)=>(
                            <li key={item.name} className="ml-3 text-sm">
                                <a className="text-gray-800 hover:text-gray-400 duration-500" href={item.link}>{item.name}</a>
                            </li>
                        ))
                    }
                    <Button>Resume<HiMiniArrowDownTray className="mx-auto"></HiMiniArrowDownTray></Button>
                    
                </ul>
        </div>
    );
};

export default Navbar;