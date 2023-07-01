// import { useEffect } from "react";
import { useState } from "react";
import './Projects.css'

const Projects = () => {
    // const [items, setItem] = useState([]);
    const [showAll, setShowAll] = useState(false);
    const [showAll1, setShowAll1] = useState(false);
    const [showAll2, setShowAll2] = useState(false);

    const project1 = () => {
        if (showAll) {
            return <div>
                <h1 className="py-2 text-xl font-semibold">Technologies:</h1>
                <ul className="flex items-center justify-center gap-5 font-medium">
                    <li>React Js</li>
                    <li>Tailwind CSS</li>
                    <li>Firebase</li>
                    <li>Express Js</li>
                    <li>MongoDb</li>
                </ul>
                <div className=" flex flex-col text-blue-700">
                    <a href="">Live link</a>
                    <a href="">Server-side-code</a>
                    <a href="">Client-side-code</a>
                </div>
                <p>***Still Working In This Project***</p>
            </div>;
        }
        else {
            return;
        }
    }
    const project2 = () => {
        if (showAll1) {
            return <div>
                <h1 className="py-2 text-xl font-semibold">Technologies:</h1>
                <ul className="flex items-center justify-center gap-5 font-medium">
                    <li>React Js</li>
                    <li>Tailwind CSS</li>
                    <li>Firebase</li>
                    <li>Express Js</li>
                    <li>MongoDb</li>
                </ul>
                <div className=" flex flex-col text-blue-700">
                    <a href="">Live link</a>
                    <a href="">Server-side-code</a>
                    <a href="">Client-side-code</a>

                </div>
                <p>***Still Working In This Project***</p>
            </div>

                ;
        }
        else {
            return;
        }
    }
    const project3 = () => {
        if (showAll2) {
            return <div>
                <h1 className="py-2 text-xl font-semibold">Technologies:</h1>
                <ul className="flex items-center justify-center gap-5 font-medium">
                    <li>React Js</li>
                    <li>Tailwind CSS</li>
                    <li>Firebase</li>
                    <li>Express Js</li>
                    <li>MongoDb</li>
                </ul>
                <div className=" flex flex-col text-blue-700">
                    <a href="">Live link</a>
                    <a href="">Server-side-code</a>
                    <a href="">Client-side-code</a>

                </div>
                <p>***Still Working In This Project***</p>
            </div>;
        }
        else {
            return;
        }
    }

    // useEffect(() => {
    //     fetch("/public/skill.json")
    //         .then(res => res.json())
    //         .then(data => {
    //             console.log(data)
    //             setItem(data)
    //         })
    // }, [])

    //  const renderData = () => {
    //     if (showAll) {
    //         return items.map((item, index) => (
    //             <div key={index}>
    //                 {item.name}
    //             </div>
    //         ));
    //     }
    //     else {
    //         return items.slice(0, 4).map((item, index) => (
    //             <div key={index}>
    //                 {item.name}
    //             </div>
    //         ))
    //     }


    // }
    return (
        <div id="projects" className="bg-gradient-to-r from-slate-200 via-white to-slate-200">
            <h1 className="text-center font-bold text-xl py-5">PROJECTS</h1>
            {/* {renderData()}
            <button onClick={() => setShowAll(!showAll)} >{showAll ? "Hide " : "Show all"}</button> */}
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div>
                    <h1 className="text-center font-bold text-lgxl pb-2 text-cyan-400">Bengal Kitchen</h1>
                    <div className="box1 mx-auto  w-[600px] md:w-96 h-96"></div>
                    <div className="text-center">
                        {project1()}

                        <button className="bg-cyan-400 rounded-lg border-2 w-28 h-10 text-center mt-4 text-gray-800 hover:text-gray-400 duration-500 drop-shadow-xl" onClick={() => setShowAll(!showAll)}>
                            {
                                showAll ? "Hide" : "Details"
                            }
                        </button>
                    </div>
                </div>
                <div>
                    <h1 className="text-center font-bold text-lgxl pb-2 text-cyan-400">Toy World</h1>
                    <div className="box2 mx-auto w-[600px] md:w-96 h-96"></div>
                    <div className="text-center">
                        {project2()}

                        <button className="bg-cyan-400 rounded-lg border-2 w-28 h-10 text-center mt-4 text-gray-800 hover:text-gray-400 duration-500 drop-shadow-xl" onClick={() => setShowAll1(!showAll1)}>
                            {
                                showAll1 ? "Hide" : "Details"
                            }
                        </button>
                    </div>
                </div>
                <div>
                    <h1 className="text-center font-bold text-lgxl pb-2 text-cyan-400">The Language Lab</h1>
                    <div className="box3 mx-auto w-[600px] md:w-96 h-96"></div>
                    <div className="text-center">
                        {project3()}

                        <button className="bg-cyan-400 rounded-lg border-2 w-28 h-10 text-center mt-4 text-gray-800 hover:text-gray-400 duration-500 drop-shadow-xl" onClick={() => setShowAll2(!showAll2)}>
                            {
                                showAll2 ? "Hide" : "Details"
                            }
                        </button>
                    </div>
                </div>
            </div>
            <hr className="mt-5 border-2" />
        </div>
    );
};

export default Projects;