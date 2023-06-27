import { VscTwitter, VscGithubInverted } from "react-icons/vsc";
import { FaLinkedin } from "react-icons/fa";
import bg from '../assets/bg.jpg';
const Home = () => {
    return (

            <div id="home" className="flex justify-center items-center px-5" style={{
                width: "100%",
                height: "50vh",
                backgroundImage: `url(${bg})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
            }}>
                <div className="text-center grow">
                    <h1 className="font-extrabold text-2xl py-2">HEY, I'M SHAKIUL ALAM</h1>
                    <p className="px-32 text-gray-600 text-sm">A Frontend Focused Web Developer building the Frontend of Website and Web Application leads to the success of the overall product.</p>
                    <button className="bg-cyan-400 rounded-lg border-2 w-28 h-10 text-center mt-4 text-gray-800 hover:text-gray-400 duration-500 drop-shadow-xl">PROJECTS</button>
                </div>
                <div className="text-2xl text-cyan-400">
                    <a href="https://twitter.com/ShakiulAlam1"target="_blank" rel="noopener noreferrer"><VscTwitter className=""></VscTwitter></a>
                    <a href="https://github.com/LeviathanS11"target="_blank" rel="noopener noreferrer"><VscGithubInverted className="my-2"></VscGithubInverted></a>
                    <a href="https://www.linkedin.com/in/shakiul-alam-6a6a871b4"target="_blank" rel="noopener noreferrer"><FaLinkedin className="my-2"></FaLinkedin></a>
                </div>
            </div>

    );
};

export default Home;