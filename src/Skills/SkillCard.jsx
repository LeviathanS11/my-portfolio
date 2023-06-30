

const SkillCard = ({item}) => {
    const {image,name}=item;
    return (
        <div className="card w-80 h-80 bg-base-100 shadow-xl mx-auto border-2 ">
            <figure className="px-10 pt-10">
                <img style={{width:"200px",height:"200px"}} src={image} className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title text-cyan-400">{name}</h2>
            </div>
        </div>
    );
};

export default SkillCard;
// 