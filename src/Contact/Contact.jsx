import { FaSquareWhatsapp, FaFacebook, FaAddressCard, FaPhoneFlip } from "react-icons/fa6";
import { AiFillMail } from "react-icons/ai";
import { SiWinamp } from "react-icons/si";
// import './Contact.css'

const Contact = () => {
    return (
        <div className=" relative text-center bg-gradient-to-r from-slate-200 via-white to-slate-200" id="contact">
            <h1 className="font-bold text-xl pt-10 pb-3">CONTACT WITH ME</h1>
            <div className="flex items-center justify-center text-cyan-400 text-lg">
                <SiWinamp></SiWinamp>
                <p className="font-semibold text-lg text-cyan-400 ">Name:</p>
            </div>
            <p className="font-semibold">Shakiul Alam</p>
            <div className="flex items-center justify-center text-cyan-400 text-lg">
                <AiFillMail></AiFillMail>
                <p className="font-semibold text-lg text-cyan-400">Email:</p>
            </div>
            <p className="font-semibold">shakiulalamsas11@gmail.com</p>
            <div className="flex items-center justify-center text-cyan-400 text-lg">
                <FaPhoneFlip></FaPhoneFlip>
                <p className="font-semibold text-lg text-cyan-400">Contact:</p>
            </div>
            <p className="font-semibold">+880 1779 486 896</p>
            <div className="flex items-center justify-center text-cyan-400 text-lg">
                <FaAddressCard></FaAddressCard>
                <p className="font-semibold  text-cyan-400">Address:</p>
            </div>
            <p className="font-semibold">Dhaka, Bangladesh</p>
            <div className="flex items-center justify-center text-cyan-400 text-lg">
                <FaFacebook></FaFacebook>
                <p className="font-semibold text-cyan-400">Facebook:</p>
            </div>
            <a className="font-semibold" href="https://www.facebook.com/shakiul.alam.14">facebook.com/shakiul.alam.14</a>
            <div className="flex items-center justify-center text-cyan-400 text-lg">
                <FaSquareWhatsapp></FaSquareWhatsapp>
                <p className="font-semibold "> WhatsApp:</p>
            </div>
            <p className="font-semibold">+880 1779 486 896</p>

        </div>
    );
};

export default Contact;