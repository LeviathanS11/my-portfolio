// import { useEffect } from "react";
import { useState } from "react";
import './Projects.css'

const Projects = () => {
    // const [items, setItem] = useState([]);
    const [showAll, setShowAll] = useState(false);


    // useEffect(() => {
    //     fetch("/public/skill.json")
    //         .then(res => res.json())
    //         .then(data => {
    //             console.log(data)
    //             setItem(data)
    //         })
    // }, [])

    const showdata=()=>{
        if(showAll){
            return <p>hello</p>;
        }
        else{
            return ;
        }
    }

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
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                    <p className="text-center">my toy world</p>
                    <div className="box mx-auto w-[600px] md:w-96 h-96"></div>
                    <div className="text-center">
                        {showdata()}
                        
                            <button onClick={()=>setShowAll(!showAll)}>
                                {
                                    showAll?"hide":"show all"
                                }
                            </button>
                        
                    </div>
                </div>
                <div>
                    <div className="box mx-auto w-[600px] md:w-96 h-96"></div>
                    
                </div>
                <div>
                    <div className="box mx-auto w-[600px] md:w-96 h-96"></div>
                    
                </div>
            </div>
        </div>
    );
};

export default Projects;