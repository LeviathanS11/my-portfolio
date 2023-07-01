

const SkillCard = ({item}) => {
    const {image,name}=item;
    return (
        <div className="flex items-center sm:gap-20 gap-3 border-2 sm:w-80 lg:w-72 mx-auto rounded-3xl text-cyan-400">
            <img className="rounded-3xl" style={{width:"100px",height:"100px"}} src={image} alt="" />
            <h1 className="w-20">{name}</h1>
        </div>
    );
};

export default SkillCard;
// 