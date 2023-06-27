import { VscTwitter,VscGithubInverted } from "react-icons/vsc";
import { FaLinkedin } from "react-icons/fa";
import bg from '../assets/bg.jpg';
const Home = () => {
    return (
        <div id="home" className="relative" style={{
            width:"100%",
            height:"100vh",
            backgroundImage: `url(${bg})`,
            backgroundPosition:'center',
            backgroundSize:'cover',
        }}>
            <div className="text-2xl bg-gray-400 inline-block absolute top-48">
                <VscTwitter className="my-1"></VscTwitter>
                <VscGithubInverted className="my-1"></VscGithubInverted>
                <FaLinkedin className="my-1"></FaLinkedin>
            </div>
        </div>
    );
};

export default Home;