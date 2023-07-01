import { useEffect, useState } from "react";
import SkillCard from "./SkillCard";

const Skils = () => {
    const [items, setItem] = useState([])

    useEffect(() => {
        fetch("skill.json")
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                setItem(data)
            })
    }, [])
    return (
        <div id="skill" className="bg-gradient-to-r from-slate-200 via-white to-slate-200">
            <h1 className="text-center font-bold text-xl pt-5">MY SKILLS</h1>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 py-10">
                {
                    items.map(item=> <SkillCard key={item.id}item={item}></SkillCard>)
                }
            </div>
            <hr className="mt-5 border-2" />
        </div>
    );
};

export default Skils;